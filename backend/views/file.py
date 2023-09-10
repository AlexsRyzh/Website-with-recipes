from fastapi import APIRouter, Depends, HTTPException, UploadFile
from fastapi.responses import FileResponse
from service.security_service import get_current_user
from service.file_service import save_file, possible_file_format
from uuid import uuid4

router = APIRouter(
    tags=['file']
)

path_for_save_img = 'upload'


@router.get('/uploads/{filename}')
async def get_img(filename):
    return FileResponse(f'{path_for_save_img}/{filename}')


@router.post('/uploads')
async def upload_file(file: UploadFile):

    if not possible_file_format(file):
        raise HTTPException(
            status_code=400,
            detail='Не верный форамат файла'
        )

    filename = str(uuid4())
    format = file.filename.split('.')[1]

    file_path = await save_file(
        file=file,
        filename=filename,
        path=path_for_save_img,
        format=format
    )

    return {'filename': filename}
