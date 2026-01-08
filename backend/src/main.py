from fastapi import FastAPI
from pydantic import BaseModel
import ocr
import gemini

app = FastAPI()
extract_text = ""

def predict_diabetes(image_path: str):
    text = extract_text(image_path)
    prediction = gemini.predict_diabetes(text)
    return {"prediction": prediction}

def extract_text(image_path: str):
    text = ocr.perform_ocr(image_path)
    global extract_text
    extract_text = text
    return {"extracted_text": text}

class Data(BaseModel):
    data_type: str
    text: str
    file: object = None
    
def process_text(query: str):
    processed_text = query.lower().strip()
    return processed_text

@app.post("/root")
def read_item(data: Data):
    if data.data_type == "text":
        return {"message": f"Received text: {data.text}"}
    elif data.data_type == "image":
        
        return {"message": f"Received image: {data.text}"}

@app.get("/")
def read_root():
    return {"message": "Welcome to the Diabetes Prediction Backend!"}