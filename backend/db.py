from motor import motor_asyncio
from os import environ
from beanie import init_beanie
from models.UserModel import UserModel
from models.RecipeModel import RecipeModel


async def init_db():
    client = motor_asyncio.AsyncIOMotorClient(environ.get('MONGODB_URL'))

    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    db = client.test

    await init_beanie(
        database=db,
        document_models=[
            UserModel,
            RecipeModel
        ]
    )
