class Either {
  constructor(val) {
    this.val = val;
  }

  static of(val) {
    return new Right(val);
  }
}

class Left extends Either {
  get is_left() {
    return true;
  }

  get is_right() {
    return false;
  }

  map() {
    return this;
  }

  apply() {
    return this;
  }
}

class Right extends Either {
  get is_left() {
    return false;
  }

  get is_right() {
    return true;
  }

  map(fn) {
    return Either.of(fn(this.val));
  }

  apply(fn) {
    return fn.map(this.val);
  }
}

module.exports = { Either, Left, Right };
