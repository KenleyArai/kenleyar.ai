from flask import json


class Model:
    data = [{'title': 'Hello, world', 'desc': 'test post', 'key': 'Hello, world'}]
    posts = {
        'Hello_world': {
            'title': 'Hello_world',
            'post': """
                This is the post!!!!
                - Chicken
                - Beef
            """
        }
    }

    def get_posts(self):
        return json.dumps(self.data)

    def get_post(self, key):
        return json.dumps(self.posts[key])
