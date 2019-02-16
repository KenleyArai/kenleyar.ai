from flask import Flask
from flask_restful import Resource, Api
from src import Posts, Post

app = Flask(__name__)
api = Api(app)

api.add_resource(Posts, '/posts')
api.add_resource(Post, '/post/<title>')

if __name__ == '__main__':
    app.run(debug=True)
