from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only, restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    model = joblib.load("model/svm_model.pkl")
    vectorizer = joblib.load("model/vectorizer.pkl")
except Exception as e:
    raise RuntimeError(f"Failed to import model/vectorizer: {e}")

class NewsInput(BaseModel):
    text: str


@app.post("/predict")
async def predict(news: NewsInput):
    try:
        input_data = [news.text]

        transformed_data = vectorizer.transform(input_data)
        transformed_data = transformed_data.toarray()

        if len(transformed_data.shape) == 1:
            transformed_data = transformed_data.reshape(1, -1)

        predict = model.predict(transformed_data)[0]
        proba = model.predict_proba(transformed_data)[0]
        return{
            "prediction": int(predict),
            "probability": {
                "real": float(proba[0])*100,
                "fake": float(proba[1])*100,
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail = str(e))