from uuid import uuid4
from fastapi import UploadFile
import os


async def save_file(file, filename, path, format):
    if not os.path.isdir(path):
        os.makedirs(path)

    file_path = f'{path}/{filename}.{format}'

    with open(file_path, 'wb') as out_file:
        content = await file.read()
        out_file.write(content)

    return file_path


def possible_file_format(file: UploadFile):
    format = file.content_type.split('/')[0]

    if format == 'image':
        return True
    return False
