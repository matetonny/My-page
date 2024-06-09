from flask import Flask
from views import views
from gevent.pywsgi import WSGIServer

app = Flask(__name__)
app.register_blueprint(views, url_prefix='/')

http_server = WSGIServer(('', 8000), app)
http_server.serve_forever()