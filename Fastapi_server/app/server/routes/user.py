from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from server.database import (
    add_users,
    delete_users,
    retrieve_users
)
from server.models.users import (
    ErrorResponseModel,
    ResponseModel,
    UsersSchema,
)
router = APIRouter()
@router.post("/", response_description="User data added into the database")
async def add_user_data(user: UsersSchema = Body(...)):
    user = jsonable_encoder(user)
    new_user = await add_users(user)
    return ResponseModel(new_user, "User added successfully.")

@router.get("/", response_description="users retrieved")
async def get_users():
    users = await retrieve_users()
    if users:
        return ResponseModel(users, "users data retrieved successfully")
    return ResponseModel(users, "Empty list returned")


@router.delete("/", response_description="user data deleted from the database")
async def delete_users_data():
    deleted_user = await delete_users()
    if deleted_user:
        return ResponseModel(
            "User : {} removed".format(deleted_user), "User deleted successfully"
        )
    return ErrorResponseModel(
         "An error occurred", 404, "User with id {0} doesn't exist".format(deleted_user)
    )
