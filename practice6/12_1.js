const products = require("./products");

const map = (f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

const filter = (f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const reduce = (f, prev, iter) => {
  if (!iter) {
    iter = prev[Symbol.iterator]();
    prev = iter.next().value;
  }
  for (const a of iter) {
    prev = f(prev, a);
  }
  return prev;
};

// 20000원 이하 뽑아와라
console.log(
  reduce(
    (a, b) => a + b,
    filter(
      (p) => p < 20000,
      map((p) => p.price, products)
    )
  )
);

const go = (...args) => {
  reduce((a, f) => f(a), args);
};

go(
  10,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);

go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce((a, b) => a + b, prices),
  console.log
);
