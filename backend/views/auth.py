from fastapi import APIRouter, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from request import RegisterRequest, LoginRequest
from models.UserModel import UserModel
from service.auth_service import create_access_token
from service.security_service import get_current_user
import bcrypt


router = APIRouter(
    prefix='/auth',
    tags=['auth'],
)


@router.post('/register')
async def register(request: RegisterRequest):

    hasSameLogin = await UserModel.find_one(
        UserModel.login == request.login
    )

    if hasSameLogin:
        raise HTTPException(
            status_code=500,
            detail="Пользовател с таким логином существует",
        )

    password = request.password
    salt = bcrypt.gensalt()
    password_hash = bcrypt.hashpw(
        password=password.encode(),
        salt=salt
    ).decode()

    user = UserModel(
        login=request.login,
        name=request.name,
        surename=request.surename,
        password_hash=password_hash
    )

    try:

        await user.save()
        token = create_access_token({
            'id': str(user.id)
        })

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Не удалось зарегистрироваться",
        )

    user = user.dict()
    user.pop("password_hash")

    return {
        'user': user,
        'access_token': token
    }


@router.post('/login')
async def login(request: LoginRequest):

    user = await UserModel.find_one(
        UserModel.login == request.login
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="Пользователь не найден"
        )

    is_valid_pass = bcrypt.checkpw(
        request.password.encode(),
        user.password_hash.encode()
    )

    if not is_valid_pass:
        raise HTTPException(
            status_code=404,
            detail="Не верный логин или пароль"
        )

    token = create_access_token({
        'id': str(user.id)
    })

    user = user.dict()
    user.pop("password_hash")

    return {
        'user': user,
        'access_token': token
    }

async def refresh():
    

@router.post('/logout')
def logout():
    return 'logout'
