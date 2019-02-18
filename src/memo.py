from functools import wraps


def memo(fn):
    cache = {}

    @wraps(fn)
    def wrapper(*args):
        if args in cache:
            return cache[args]
        cache[args] = fn(*args)
        return cache[args]
    return wrapper
