from pydantic import BaseModel, Field


class UserModel(BaseModel):
    login: str = Field(...)
    name: str = Field(...)
    surename: str = Field(...)
    password_hash: str = Field(...)

    class Config:
        schema_extra = {
            'example': {
                'login': 'alex123',
                'name': 'alexs',
                'surename': 'petrov',
                'password_hash': '3ij3904j3n53n9g593'
            }
        }
