from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
import motor.motor_asyncio
from decouple import config
from config import get_settings
from server.models.users import UsersSchema

client = motor.motor_asyncio.AsyncIOMotorClient(get_settings().db_url)

database = client.fastapi

users_collection = database.get_collection("Users")

router = APIRouter()

@router.post("/")
async def add_user_data(user: UsersSchema = Body(...)):
    user = jsonable_encoder(user)
    users = await users_collection.insert_one(user)
    return "Insert success "

@router.get("/")
async def retrieve_users():
    display = []
    async for user in users_collection.find().limit(50):
        display.append(user)
    return display


@router.delete("/")
async def delete_users() :
        await users_collection.delete_many({})
        return "delete success"
