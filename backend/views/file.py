from fastapi import APIRouter, Depends, HTTPException,UploadFile
from fastapi.responses import FileResponse
from service.security_service import get_current_user
from uuid import uuid4
import os

router = APIRouter(
    tags=['file']
)

path_for_save_img = 'upload'

@router.get('/uploads/{filename}')
async def get_img(filename):
    return FileResponse(f'{path_for_save_img}/{filename}')

@router.post('/uploads')
async def upload_file(in_file: UploadFile):

    if in_file.content_type.split('/')[0] != 'image':
        raise HTTPException(
            status_code=400,
            detail='Не верный форамат файла'
        )

    if not os.path.isdir(path_for_save_img):
        os.makedirs(path_for_save_img)


    file_name = str(uuid4())
    suffix = in_file.filename.split('.')[1]
    file_path = f'{path_for_save_img}/{file_name}.{suffix}'

    with open(file_path, 'wb') as out_file:
        content = await in_file.read()
        out_file.write(content)

    return {'filename': file_path}
