from beanie import Document, Link
from models.RecipeModel import RecipeModel
from models.UserModel import UserModel


class FavouriteModel(Document):
    user: Link[UserModel]
    recipe: Link[RecipeModel]


    
