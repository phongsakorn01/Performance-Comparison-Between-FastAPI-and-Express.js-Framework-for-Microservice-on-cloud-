from fastapi import FastAPI
from server.routes.user import router as UsersRouter
app = FastAPI()

app.include_router(UsersRouter, tags=["users"], prefix="/fastapi")

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
