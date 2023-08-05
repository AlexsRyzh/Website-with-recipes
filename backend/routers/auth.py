from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from schemas.authSchema import RegisterRequest, LoginRequest
from models.UserModel import UserModel
from jose import jwt
from db.db import db

router = APIRouter(
    prefix='/auth',
    tags=['auth'],
)


@router.post('/register')
def register(request: RegisterRequest):
    request_json = jsonable_encoder(request)
    user = UserModel(
        login=request_json['login'],
        name=request_json['name'],
        surename=request_json['surename'],
        password_hash='csv9fvs9j'
    )
    try:
        db['user'].insert_one(jsonable_encoder(user))
    except e:
        return 'Fail'

    return jsonable_encoder(user)


@router.post('/login')
def login(request: LoginRequest):
    return request


@router.post('/logout')
def logout():
    return 'logout'
