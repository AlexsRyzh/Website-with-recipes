from typing import List


def user_serializers(user) -> dict:
    return {
        'id': str(user['_id']),
        'login': user['login'],
        'name': user['name'],
        'surename': user['surename'],
        'password_hash': user['password_hash']
    }


def user_list_serializers(list_user):
    return [
        user_serializers(user)
        for user in list_user
    ]
