from motor import motor_asyncio
from os import environ

client = motor_asyncio.AsyncIOMotorClient(environ.get('MONGODB_URL'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.test
