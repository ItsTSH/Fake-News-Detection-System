from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import BertModel, AutoTokenizer
import torch
import torch.nn.functional as F
import torch.nn as nn
from contextlib import asynccontextmanager
from model_download_helper import ModelLoader
from pathlib import Path
import os
# from dotenv import load_dotenv        # for deployment only

#load_dotenv()                          # for deployment only

MODEL_DRIVE_ID = "1mflw5Yw7Sqybi5ll_zxF5jtt0_cylBW3"        # key-value pair for local only
# MODEL_DRIVE_ID = os.getenv("MODEL_DRIVE_ID")              # make a .env file in backend/ with the key value pair above and use this for production

origins = ["http://localhost:5173"]  # add vercel url during deployment

# Custom BERT Model Architecture
class BERT_Arch(nn.Module):
  def __init__(self, bert):
    super(BERT_Arch, self).__init__()
    self.bert = bert
    self.dropout = nn.Dropout(0.1)        # dropout layer
    self.relu = nn.ReLU()                 # relu activatoin function
    self.fc1 = nn.Linear(768,512)         # dense layer 1
    self.fc2 = nn.Linear(512, 2)          # dense layer 2 (Output Layer)
    self.softmax = nn.LogSoftmax(dim=1)   # softmax activation function

  def forward(self, sent_id, mask):       # define the forward pass
    cls_hs = self.bert(sent_id, attention_mask = mask)['pooler_output']
                                          # pass the inputs to the model
    x = self.fc1(cls_hs)
    x = self.relu(x)
    x = self.dropout(x)
    x = self.fc2(x)                       # output layer
    x = self.softmax(x)                   # apply softmax activation
    return x

# Load model and tokenizer only once during startup
@asynccontextmanager
async def lifespan(app: FastAPI):
    BASE_DIR = Path(__file__).resolve().parent
    MODEL_DIR = BASE_DIR / "model"
    CACHE_DIR = BASE_DIR / ".model_cache"
    
    # Create ModelLoader with your specified directories
    model_loader = ModelLoader(model_dir=MODEL_DIR, cache_dir=CACHE_DIR)
    
    # Make sure these paths match your MODEL_DIR
    tokenizer_path = f"{MODEL_DIR}/saved_tokenizer"
    model_state_dict_path = f"{MODEL_DIR}/model_weights.pth"
    
    try:
         # Ensure model files are available
        print("Checking for model files...")
        if not model_loader.ensure_model_available(MODEL_DRIVE_ID):
            print("WARNING: Failed to ensure model availability. API may not function correctly.")
        
        print("Loading tokenizer...")
        tokenizer = AutoTokenizer.from_pretrained(tokenizer_path)
        
        print("Building model architecture...")
        # Build architecture once
        bert = BertModel.from_pretrained('bert-base-uncased')
        model = BERT_Arch(bert)
        
        print("Loading model weights...")
        # Load just the weights
        model.load_state_dict(torch.load(model_state_dict_path, map_location='cpu'))
        
        # Set to evaluation mode
        model.eval()
        
        # Move to GPU if available
        if torch.cuda.is_available():
            model = model.to('cuda')
            print("Model moved to GPU")
        else:
            print("Running on CPU")
            
        print("Model and tokenizer loaded successfully!")

        app.state.model = model
        app.state.tokenizer = tokenizer
    except Exception as e:
        print(f"Failed to load model or tokenizer: {e}")
        # Continue without raising - FastAPI will start but endpoints will fail
    
    yield

class NewsInput(BaseModel):
    text: str

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(news: NewsInput, request: Request):
    tokenizer = request.app.state.tokenizer
    model = request.app.state.model
    
    if model is None or tokenizer is None:
        raise HTTPException(status_code=503, detail="Model or tokenizer not loaded")
    
    try:
        # Get the device where the model is
        device = next(model.parameters()).device
        
        tokens = tokenizer.encode_plus(
            news.text,
            max_length=15,  # only trained for headlines
            padding='max_length',
            truncation=True,
            return_tensors='pt'
        )
        
        # Move inputs to the same device as the model
        unseen_seq = tokens['input_ids'].to(device)
        unseen_mask = tokens['attention_mask'].to(device)
        
        with torch.no_grad():
            logits = model(unseen_seq, unseen_mask)                 # Raw model output (logits)
            proba = F.softmax(logits, dim=1)                        # Apply softmax to the logits to get probabilies ## Shape: array([REAL][FAKE]) dtype = float32
            pred = torch.argmax(proba, dim=1)                       # Get predicted class from the probabilities
        
        # # Convert to NumPy for returning
        # proba_np = proba.cpu().numpy()                            # currently disabled for testing
        # pred_np = pred.cpu().numpy()
     
        return {
            "prediction": int(pred[0]),
            "reliability": float(proba[0][0]*100)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Fake News Detection API is running"}
