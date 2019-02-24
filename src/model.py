from flask import json, url_for
from src.memo import memo
import re
import os


def clean_filename(filename):
    res = []
    # Splitting words based on capitals but we have to clean up the
    # case where 2 capitals are right next to each other
    for word in re.sub("([a-z])([A-Z])", "\g<1> \g<2>", filename).split():
        if len(word) > 1:
            # checking to see if 2 capital letters are right next to each other
            if word[0].isupper() and word[1].isupper():
                res.append(word[0])
                res.append(word[1:])
            else:
                res.append(word)
        else:
            res.append(word)
    res[-1] = res[-1][:-3]  # Remove .md from the end of the file
    return " ".join(res)


class Model:
    url = 'http://localhost:5000/'
    posts_path = 'posts/'

    @memo
    def get_posts(self):
        current_path = os.getcwd() + "/" + self.posts_path
        posts = []
        for filename in os.listdir(current_path):
            with open(current_path + filename) as f:
                title = []
                desc = []

                for line in f.readlines():
                    if not line.startswith("#"):
                        desc.append(line)
                    else:
                        break
                posts.append({
                    "title": clean_filename(filename),
                    'desc': "".join(desc)})
        return json.dumps(posts)

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
