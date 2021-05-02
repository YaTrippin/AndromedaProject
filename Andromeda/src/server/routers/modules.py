from fastapi import APIRouter


router = APIRouter()

@router.get('/get_modules'):
    return {'wow': 'wow'}