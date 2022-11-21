
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseSettings
from functools import lru_cache
class Settings(BaseSettings):
    server_url: str 
    port:int
    db_url: str 
    class Config:
        env_file = ".env"
@lru_cache
def get_settings() -> Settings:
    settings = Settings()
    print(f"Loading settings")
    return settings
    
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
