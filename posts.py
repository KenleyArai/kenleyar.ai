from flask_restful import Resource, Api

data = {
    'posts': [{'title': 'Hello, world', 'desc': 'test post'}]
}


class Posts(Resource):
    def get(self):
        return data
