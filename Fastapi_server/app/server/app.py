from fastapi import FastAPI
from server.routes.user import router as UsersRouter
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.include_router(UsersRouter, tags=["users"], prefix="/fastapi")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
