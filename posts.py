from flask import json
from flask_restful import Resource, Api

data = [{'title': 'Hello, world', 'desc': 'test post'}]


class Posts(Resource):
    def get(self):
        return json.dumps(data)
