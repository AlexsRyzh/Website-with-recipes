from pydantic import BaseModel, validator, root_validator
from typing import Optional


class RegisterRequest(BaseModel):
    login: str
    name: str
    surename: str
    password1: str
    password2: str

    class Config:
        schema_extra = {
            'example': {
                'login': 'alex123',
                'name': 'alexs',
                'surename': 'petrov',
                'password1': 'psd23',
                'password2': 'psd23'
            }
        }


class LoginRequest(BaseModel):
    email: str
    password: str
