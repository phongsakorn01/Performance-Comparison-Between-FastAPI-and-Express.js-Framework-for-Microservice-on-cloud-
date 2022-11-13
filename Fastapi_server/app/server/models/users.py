from typing import Optional

from pydantic import BaseModel, Field


class UsersSchema(BaseModel):
    customId: str = Field(...)
    fname: str = Field(...)
    lname: str = Field(...)
    age:   str = Field(...)
    address: str = Field(...)
    tel: str = Field(...)

    class Config:
        users_schema = {
            "users":  {
            "customId": "1",
            "fname": "phongsakorn",
            "lname": "yaemwong",
            "age": "20",
            "address": "11/21 m.2 tambon test",
            "tel": "0932912921"
      
    }
        }

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }


def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}