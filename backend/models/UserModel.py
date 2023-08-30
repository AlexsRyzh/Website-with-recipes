from beanie import Document, before_event, Insert, Replace, Indexed
from datetime import datetime

class UserModel(Document):
    login: str
    name: str
    surename: str
    password_hash: str
    created_at: datetime = datetime.utcnow()
    updated_at: datetime = datetime.utcnow()

    class Settings:
        name = 'users'

    @before_event([Insert,Replace])
    def update_update(self):
        self.updated_at = datetime.utcnow()