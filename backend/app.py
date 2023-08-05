from fastapi.responses import JSONResponse
from fastapi import FastAPI
from routers import auth
from dotenv import load_dotenv
from os import environ
from typing import Optional
from db.db import db
from serializers.serializers import user_list_serializers

load_dotenv()
app = FastAPI()


app.include_router(auth.router)


@app.get('/users')
async def get_users():
    users_list = await db['user'].find({}).to_list(None)
    return user_list_serializers(users_list)
