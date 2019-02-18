from src import model


class TestModel:
    m = model.Model()

    def test_init(self):
        assert model.Model.url == 'http://localhost:5000/'
        assert self.m.url == 'http://localhost:5000/'
