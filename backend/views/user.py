from fastapi import APIRouter, Depends, HTTPException
from request import RecipeCreateRequest, UpdateRecipeRequest
from models.RecipeModel import RecipeModel
from models.UserModel import UserModel
from service.security_service import get_current_user
from beanie import PydanticObjectId

router = APIRouter(
    tags=['users'],
)


@router.get('/users/me/recipes')
async def get_my_recipes(user_id: str = Depends(get_current_user)):

    recipes = await RecipeModel.find(RecipeModel.user.id == PydanticObjectId(user_id)).to_list()

    return recipes


@router.get('/users/me')
async def get_me(user_id: str = Depends(get_current_user)):

    user = await UserModel.get(user_id)

    if not user:
        raise HTTPException(
            status_code=404,
            detail='Пользователь не найден'
        )

    user = user.dict()
    user.pop("password_hash")

    return user
