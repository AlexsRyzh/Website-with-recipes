from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from .auth_service import verify_token
from fastapi import Depends, Request, HTTPException


class JWTBearer(HTTPBearer):
    def __init__(self, auto_error: bool = True):
        super(JWTBearer, self).__init__(auto_error=auto_error)

    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super(JWTBearer, self).__call__(request)

        if credentials:
            if not credentials.scheme == "Bearer":
                raise HTTPException(
                    status_code=403,
                    detail="Не валидная схема авторизации"
                )
            
            user_id = verify_token(credentials.credentials)
            return credentials.credentials

        else:
            raise HTTPException(
                status_code=403,
                detail="Нет доступа"
            )

jwt_bearer = JWTBearer()

async def get_current_user(token: str = Depends(jwt_bearer)):
    user_id = verify_token(token)

    return user_id['id']
