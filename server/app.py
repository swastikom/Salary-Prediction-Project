
from fastapi import FastAPI
from model.prediction import predict_salary

from model.data import get_data
app = FastAPI()

@app.get('/')
def abc():
    return{ 'data': 'Welcome to this colaboration project'}