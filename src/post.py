from flask_restful import Resource
from .model import Model


class Post(Resource):
    m = Model()

    def get(self, title):
        return self.m.get_post(title)
