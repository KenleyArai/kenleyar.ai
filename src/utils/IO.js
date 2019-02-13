var compose = require('./functions/compose');

class IO {
  constructor(fn) {
    this.unsafe_perform_IO = fn;
  }

  static of(val) {
    return new IO(() => val);
  }

  map(fn) {
    return new IO(
      compose(
        fn,
        this.unsafe_perform_IO
      )
    );
  }

  apply(fn) {
    return this.chain(f => fn.map(f));
  }

  chain(fn) {
    this.map(fn).join();
  }

  join() {
    return this.unsafe_perform_IO();
  }
}

module.exports = IO;
