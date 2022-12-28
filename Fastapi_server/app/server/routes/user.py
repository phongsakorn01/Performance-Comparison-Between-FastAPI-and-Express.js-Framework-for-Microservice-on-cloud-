from fastapi import APIRouter, Response,responses
from fastapi.encoders import jsonable_encoder
from server.models.users import UsersSchema,users_collection
from pymongo import  DESCENDING

router = APIRouter()

@router.post("/")
async def add_user_data(user: UsersSchema):
    try:
        user = jsonable_encoder(user)
        users = await users_collection.insert_one(user)
        return Response(status_code=200,content= "Insert complete")
    except  Exception as e:
            return e

@router.get("/")
async def retrieve_users():
    display = []
    try:
        async for user in users_collection.find({}, {'_id': False }).limit(50).sort([ ("customId", DESCENDING)]):
            display.append(user)
        return responses.JSONResponse(status_code=200,content= jsonable_encoder(display))
    except Exception as e:
            return e

@router.delete("/")
async def delete_users() :
        try:
            await users_collection.delete_many({})
            return "delete success"
        except Exception as e:
            return e

