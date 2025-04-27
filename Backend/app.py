from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib

app = FastAPI()

try:
    model = joblib.load("model/svm_model.pkl")
    vectorizer = joblib.load("model/vectorizer.pkl")
except Exception as e:
    raise RuntimeError(f"Failed to import model/vectorizer: {e}")

class NewsInput(BaseModel):
    text: str


@app.post("/")
async def predict(news: NewsInput):
    try:
        input_data = [news.text]
        # Transform the data into the vectorized form
        transformed_data = vectorizer.transform(input_data)
        transformed_data = transformed_data.toarray()

        # Ensure it's 2D (for example: shape (1, num_features))
        if len(transformed_data.shape) == 1:
            transformed_data = transformed_data.reshape(1, -1)

        predict = model.predict(transformed_data)[0]
        proba = model.predict_proba(transformed_data)[0]
        return{
            "prediction": int(predict),
            "predict_proba": {
                "real": float(proba[0]),
                "fake": float(proba[1]),
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail = str(e))