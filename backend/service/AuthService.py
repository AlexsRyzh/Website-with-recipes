from jose import jwt
from datetime import datetime, timezone, timedelta


'''
date - Данные для token
seconds - время жизни токена в секундах
'''

ALGORITHM = 'HS256'

JWT_SECRETE_KEY = '9be2e9ad2f248356a93703268f73e81f60422a51ff96f5ec6bd69e9477f651e3'
JWT_REFRESH_SECRETE_KEY = 'ecca9e9c99e0e9013054851ecadd53362572686c35dc162337e7bb1c4006e435'

JWT_TOKEN_EXPIRE_SECONDS = 60 * 15
JWT_REFRESH_TOKEN_EXPIRE_SECONDS = 60*60*24*2


def create_access_token(date: dict, seconds: int = None):
    expire_delta = JWT_TOKEN_EXPIRE_SECONDS
    if seconds:
        expire_delta = seconds

    token = jwt.encode({
        **date,
        'exp': expire_delta + ,
    },
        key=JWT_SECRETE_KEY,
        algorithm=ALGORITHM
    )

    return token


def create_refresh_token(date: dict, seconds: int = None):

    expire_delta = JWT_REFRESH_TOKEN_EXPIRE_SECONDS
    if seconds:
        expire_delta = seconds

    refresh_token = jwt.encode({
        **date,
        'exp': expire_delta
    },
        JWT_REFRESH_SECRETE_KEY,
        ALGORITHM
    )

    return refresh_token
