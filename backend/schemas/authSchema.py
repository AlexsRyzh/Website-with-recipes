from pydantic import BaseModel, validator, root_validator
from typing import Optional


class RegisterRequest(BaseModel):
    login: str
    name: str
    surename: str
    password1: str
    password2: str

    @validator('*')
    def is_not_empty_str(cls, v: str):
        if len(v) == 0:
            raise ValueError(
                'Поле не должно быть пустым')

        if len(v) < 5:
            raise ValueError(
                'Минимальная дина 5 символов')

        return v

    @validator('password2')
    def check_password(cls, v, values):

        if v != values['password1']:
            raise ValueError("Пароль не совпадает")

        return v

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
    login: str
    psw: str
