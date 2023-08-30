from jose import jwt, JWTError, ExpiredSignatureError
from datetime import datetime, timedelta
from fastapi import HTTPException, status

'''
date - Данные для token
seconds - время жизни токена в секундах
'''

ALGORITHM = 'HS256'

JWT_SECRETE_KEY = '9be2e9ad2f248356a93703268f73e81f60422a51ff96f5ec6bd69e9477f651e3'


JWT_TOKEN_EXPIRE_SECONDS = 15*60
JWT_REFRESH_TOKEN_EXPIRE_SECONDS = 60*60*24*2


def create_access_token(date: dict, seconds: int | None = None):
    expire_delta = datetime.utcnow()

    if seconds:
        expire_delta += timedelta(seconds=seconds)
    else:
        expire_delta += timedelta(seconds=JWT_TOKEN_EXPIRE_SECONDS)


    token = jwt.encode({
        **date,
        'exp': expire_delta,
    },
        key=JWT_SECRETE_KEY,
        algorithm=ALGORITHM
    )

    return token


def create_refresh_token(date: dict, seconds: int | None = None):

    expire_delta = datetime.utcnow()
    
    if seconds:
        expire_delta += timedelta(seconds=seconds)
    else:
        expire_delta += timedelta(seconds=JWT_REFRESH_TOKEN_EXPIRE_SECONDS)

    refresh_token = jwt.encode({
        **date,
        'exp': expire_delta
    },
        JWT_SECRETE_KEY,
        ALGORITHM
    )

    return refresh_token


def verify_token(token: str):
    try:
        payload = jwt.decode(
            token=token,
            key=JWT_SECRETE_KEY,
            algorithms=ALGORITHM
        )
    except ExpiredSignatureError:
       raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail="Срок действия токена истек",
            headers={"WWW-Authenticate": "Bearer"},
        ) 
    except JWTError:

        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Не авторизован",
            headers={"WWW-Authenticate": "Bearer"}
        )

    return payload