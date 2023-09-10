from fastapi import APIRouter, Depends, HTTPException
from request import RecipeCreateRequest, UpdateRecipeRequest
from models.RecipeModel import RecipeModel
from models.UserModel import UserModel
from service.security_service import get_current_user

router = APIRouter(
    tags=['recipes'],
)


@router.get('/recipes')
async def get_all():

    recipes = await RecipeModel.find().to_list()

    return recipes


@router.get('/recipes/{id}')
async def get_one(id: str):

    recipe = await RecipeModel.get(id, fetch_links=True)

    return {
        'recipe': recipe
    }


@router.post('/recipes')
async def create(request: RecipeCreateRequest, user_id=Depends(get_current_user)):
    try:
        user = await UserModel.get(user_id)

        recipe = RecipeModel(
            **request.model_dump(),
            user=user
        )

        await recipe.save()

        return {
            **recipe.dict()
        }

    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500,
            detail='Не удалось создать статью'
        )


@router.delete('/recipes/{id}')
async def remove(
    id: str,
    user_id=Depends(get_current_user)
):

    try:

        user = await UserModel.get(user_id)

        recipe = await RecipeModel.get(id)

        if not recipe:
            raise HTTPException(
                status_code=404,
                detail='Статья не найдена'
            )

        # if not user or recipe.user.id != user.id:
        #     raise HTTPException(
        #         status_code=403,
        #         detail='Доступ запрещен'
        #     )

        await recipe.delete()
        return {
            "recipe": recipe
        }

    except:

        raise HTTPException(
            status_code=500,
            detail='Не удалось удалить статью статью'
        )


@router.patch('/recipes/{id}')
async def update(
    id: str,
    request: UpdateRecipeRequest,
    user_id=Depends(get_current_user)
):

    try:

        recipe = await RecipeModel.get(id)

        if not recipe:
            raise HTTPException(
                status_code=404,
                detail='Рецепт не найден'
            )

        edit_field = request.dict(exclude_unset=True)

        await recipe.set(edit_field)

        return {
            'success': True
        }

    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500,
            detail='Не удалось обновить статью'
        )
