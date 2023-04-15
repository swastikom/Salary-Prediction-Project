
import uvicorn
from fastapi import FastAPI
from routers import pred,home


app = FastAPI()

app.include_router(home.router)
app.include_router(pred.router)

if __name__ =="__main__":
    uvicorn.run(app)
    