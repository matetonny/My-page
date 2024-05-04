from flask import Flask
from flask_ngrok2 import run_with_ngrok
from views import views

app = Flask(__name__)
app.register_blueprint(views, url_prefix='/')
run_with_ngrok(app)

if __name__ == '__main__':
    app.run()