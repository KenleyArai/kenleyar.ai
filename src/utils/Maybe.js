class Maybe {
  static of(val) {
    return new Maybe(val);
  }

  get is_nothing() {
    return this.val === null || this.val === undefined;
  }

  constructor(val) {
    this.val = val;
  }

  get is_just() {
    return !this.is_nothing;
  }

  map(fn) {
    return this.is_nothing ? this : Maybe.of(fn(this.val));
  }

  apply(fn) {
    return this.is_nothing ? this : fn.map(this.val);
  }
}

module.exports = Maybe;
