from fastapi import APIRouter,status
from prediction import predict_salary
import schemas


router = APIRouter()


@router.post('/predict', status_code=status.HTTP_201_CREATED,
             tags=['Salary Prediction Route'])
def predict(request: schemas.Load):
    prediction_salary = predict_salary(
        Location=request.location,
        JobRole=request.jobrole,
        Experience=request.experience,
        Degree=request.degree
    )

    return prediction_salary
