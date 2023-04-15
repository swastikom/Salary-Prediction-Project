
import uvicorn
from fastapi import FastAPI
from prediction import predict_salary
import schemas

app = FastAPI()

@app.get('/')
def homePage():
    return{ 'data': 'Welcome to this colaboration project'}


@app.post('/predict')
def predict(request: schemas.Load):
    prediction_salary = predict_salary(
        Location = request.location,
        JobRole=request.jobrole ,
        Experience=request.experience,
        Degree=request.degree
    )
    
    return prediction_salary


if __name__ =="__main__":
    uvicorn.run(app)
    