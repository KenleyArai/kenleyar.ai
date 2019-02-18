from flask import json, url_for


class Model:
    url = 'http://localhost:5000/'
    data = [{'title': 'Hello, world', 'desc': 'test post', 'key': 'Hello, world'}]
    posts = {
        'Hello_world': {
            'title': 'Hello_world',
            'post': url + 'static/mdx/Hello_world.mdx'}
    }

    def get_posts(self):
        return json.dumps(self.data)

    def get_post(self, key):
        return json.dumps(self.posts[key])
