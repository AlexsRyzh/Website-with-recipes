from fastapi.responses import JSONResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from os import environ
from typing import Optional
from db import db
from serializers.serializers import user_list_serializers
from views import auth, recipes


load_dotenv()
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(recipes.router)


@app.get('/users')
async def get_users():
    users_list = await db['user'].find({}).to_list(None)
    return user_list_serializers(users_list)
