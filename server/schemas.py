from pydantic import BaseModel

class Load(BaseModel):
    location: str
    jobrole: str
    experience: int
    degree: str
