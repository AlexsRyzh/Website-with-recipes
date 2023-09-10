from beanie import Document, Link, Insert, Replace, before_event
from typing import List, Optional
from pydantic import BaseModel, FileUrl
from .UserModel import UserModel
from datetime import datetime


class Ingredient(BaseModel):
    title: str
    amount: int


class RecipeModel(Document):
    title: str
    tags: List[str] = []
    ingredients: List[Ingredient]
    cooking_time: int
    description: str
    img_url: FileUrl | None = None
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()

    # Link
    user: Link[UserModel]

    class Settings:
        name = 'recipes'

    @before_event([Insert, Replace])
    def update_update(self):
        self.updated_at = datetime.utcnow()
