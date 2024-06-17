import app
import os
from threading import Thread

def run_cloudflared():
    os.system("cloudflared tunnel run mypage")

if __name__ == "__main__":
    app_thread = Thread(target=app.run_app)
    tunnel_thread = Thread(target=run_cloudflared)
    
    tunnel_thread.start()
    app_thread.start()
    
    app_thread.join()
    tunnel_thread.join()