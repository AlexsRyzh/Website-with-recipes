from pydantic import BaseModel, field_validator
from typing import List, Optional
from models.RecipeModel import Ingredient


class RegisterRequest(BaseModel):
    login: str
    name: str
    surename: str
    password: str

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    'login': 'alex123',
                    'name': 'alexs',
                    'surename': 'petrov',
                    'password': '12323edwe4'
                }
            ]
        }
    }


class LoginRequest(BaseModel):
    login: str
    password: str

    class Config:
        json_schema_extra = {
            'example': {
                'login': 'alex123',
                'password': '12323edwe4'
            }
        }


class RecipeCreateRequest(BaseModel):
    title: str
    tags: List[str]
    ingredients: List[Ingredient]
    cooking_time: int
    description: str

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    'title': 'Пирог с малиной',
                    'tags': ['Завтрак', 'Обед'],
                    'ingredients': [
                        {
                            'title': "Морковь",
                            'amount': 454
                        }
                    ],
                    'cooking_time': 20,
                    'description': 'csifvibeowbeubgovewbriwtrhr'
                }
            ]
        }
    }


class UpdateRecipeRequest(BaseModel):
    title: Optional[str]
    tags: Optional[List[str]]
    ingredients: Optional[List[Ingredient]]
    cooking_time: Optional[int]
    description: Optional[str]

    model_config = {
        "json_schema_extra": {
            "examples": [
                {
                    'title': 'Пирог с малиной',
                    'tags': ['Завтрак', 'Обед'],
                    'ingredients': [{
                        'title': "Морковь",
                        'amount': 454
                    }],
                    'cooking_time': 20,
                    'description': 'csifvibeowbeubgovewbriwtrhr'
                }
            ]
        }
    }
