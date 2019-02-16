from flask_restful import Resource
from .model import Model


class Posts(Resource):
    m = Model()

    def get(self):
        return self.m.get_posts()
