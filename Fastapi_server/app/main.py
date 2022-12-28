import uvicorn
from config import get_settings
if __name__ == "__main__":
    uvicorn.run("server.app:app" , host=get_settings().server_url, port=get_settings().port)