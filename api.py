from flask import Flask
from flask_restful import Resource, Api
from posts import Posts

app = Flask(__name__)
api = Api(app)

api.add_resource(Posts, '/posts')

if __name__ == '__main__':
    app.run(debug=True)
