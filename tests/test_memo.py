from src import memo


@memo
def add_func(a, b):
    return a + b


class TestMemo:

    def test_cache(self):
        # make sure the cache returns the same value multiple times
        assert add_func(1, 2) == 3
        assert add_func(1, 2) == 3

        assert add_func(10, -2) == add_func(10, -2)
