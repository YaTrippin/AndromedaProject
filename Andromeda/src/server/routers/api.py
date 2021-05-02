from fastapi import APIRouter
from server.routers import modules


router = APIRouter()
router.include_router(modules.router)