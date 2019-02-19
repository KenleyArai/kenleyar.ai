from flask import json, url_for
from src.memo import memo
from functools import wraps
import re


class Model:
    url = 'http://localhost:5000/'
    posts_path = 'posts/'

    @memo
    def get_posts(self):
        return json.dumps(self.data)

    @memo
    def get_post(self, key):

        still_desc = True

        with open(self.posts_path + key + '.md') as f:
            desc = []
            post = []

            for line in f.readlines():
                if still_desc and not line.startswith('#'):
                    post.append(line)
                else:
                    still_desc = not still_desc
                    desc.append(line)

        return json.dumps({
            'title': " ".join(re.findall('[A-Z][a-z]*', key)),
            'post': "".join(post),
            'desc': "".join(desc)
        })
