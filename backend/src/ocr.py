import cv2
import easyocr
import requests
import numpy as np

def perform_ocr(image_url: str):
    # Download image from URL
    response = requests.get(image_url)
    if response.status_code != 200:
        raise Exception("Failed to download image")

    # Convert downloaded bytes to numpy array
    img_array = np.asarray(bytearray(response.content), dtype=np.uint8)
    img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

    if img is None:
        raise Exception("Failed to decode image")

    # Preprocess for OCR
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)

    # Save processed image (debugging)
    cv2.imwrite("processed.png", thresh)

    # OCR using EasyOCR
    reader = easyocr.Reader(['en'], gpu=False)
    results = reader.readtext(thresh)

    extracted_text = " ".join([r[1] for r in results])
    print("Extracted Text:")
    print(extracted_text)

    return extracted_text


# perform_ocr("https://res.cloudinary.com/dddcd0hco/image/upload/v1767845053/report_cxswyh.jpg")
