from pydantic import BaseModel
import motor.motor_asyncio
from config import get_settings

client = motor.motor_asyncio.AsyncIOMotorClient(get_settings().db_url)

database = client.fastapi

users_collection = database.get_collection("Users")
class UsersSchema(BaseModel):
    customId: str 
    fname: str 
    lname: str 
    age:   str 
    address: str 
    tel: str 
    users_collection.create_index("customId", unique=True)
        
