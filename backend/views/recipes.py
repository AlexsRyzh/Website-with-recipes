from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from schemas.authSchema import RegisterRequest, LoginRequest
from models.UserModel import UserModel
from jose import jwt
from db import db

router = APIRouter(
    tags=['recipes'],
)


@router.get('/recipes')
def get_recipes():
    return [
        {
            'img': 'https://distfood.ru/upload/medialibrary/b7e/b7e260bf177d71f2628cb026c85b160a.jpg',
            'title': 'Пирог с малиной',
            'tags': ['Завтрак', 'Обед'],
            'cookingTime': 20,
            'author': {
                'name': 'Вероника',
                'surename': 'Чернова'
            }
        } for i in range(6)
    ]
