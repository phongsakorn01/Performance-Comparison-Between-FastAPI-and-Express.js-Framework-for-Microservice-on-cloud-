import motor.motor_asyncio
from bson.objectid import ObjectId
from decouple import config

MONGO_DETAILS = "mongodb://localhost:27017/"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.users_fastapi

users_collection = database.get_collection("Users")

def users_helper(users) -> dict:
    return {
        "customId": users["customId"],
        "fname": users["fname"],
        "lname": users["lname"],
        "age": users["age"],
        "address": users["address"],
        "tel": users["tel"],
    }


async def retrieve_users():
    display = []
    async for user in users_collection.find():
        display.append(users_helper(user))
    return display


# Add a new student into to the database
async def add_users(users_data: dict) -> dict:
    users = await users_collection.insert_one(users_data)
    new_users = await users_collection.find_one({"_id": users.inserted_id})
    return users_helper(new_users)

# Delete a student from the database
async def delete_users() :
        await users_collection.delete_many({"customId":"1"})
        return True