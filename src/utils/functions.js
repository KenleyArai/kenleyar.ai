var { Left } = require('./Either');

//curry :: ((a,b,...) -> c) -> a -> b ->...-> c
const curry = fn => {
  const arity = fn.length;

  return function $curry(...args) {
    return args.length < arity
      ? $curry.bind(null, ...args)
      : fn.call(null, ...args);
  };
};

// add :: Number -> Number -> Number
const add = curry((a, b) => a + b);

// always :: a -> b -> a
const always = curry((a, b) => a);

// chain :: Monad m -> (a -> mb) -> ma -> mb
const chain = curry((fn, m) => m.chain(fn));

// compose :: ((a->b), (b->c),...,(y->z))-> a -> z
const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

// concat :: String -> String -> String
const concat = curry((a, b) => a.concat(b));

// either :: (a->c) -> (b->c) -> Either a b -> c
const either = curry((f, g, e) => (e.is_left ? f(e.val) : g(e.val)));

// equal :: Equal a => a -> b -> Boolean
const equal = curry((a, b) => a === b);

// filter :: (a -> Boolean) -> [a] -> [a]
const filter = curry((fn, xs) => xs.filter(fn));

// forEach :: (a -> ()) -> [a] -> ()
const forEach = curry((fn, xs) => xs.forEach(fn));

// identity :: x -> x
const identity = x => x;

// left :: a -> Either a b
const left = a => Left.of(a);

// reduce :: (f -> Accumulator) -> Integer -> [a] -> Accumulator
const reduce = curry((f, start, arr) => {
  let acc = start;
  for (let i = 0; i < arr.length; i++) {
    acc = f(arr[i], acc);
  }
  return acc;
});

module.exports = {
  add,
  always,
  chain,
  compose,
  concat,
  curry,
  either,
  equal,
  filter,
  forEach,
  identity,
  left,
  reduce,
};
