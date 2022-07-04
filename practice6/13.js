const products = require("./products");
// curry 함수 함수를 값으로 다루며 받아둔 함수를 내가 원하는 시점에 평가하는 것
// 첫번째 인자와 나머지 인자를 받음
// 함수를 받아 함수 리턴
// 리턴된 함수가 실행 될때 인자가 2개 이상이라면 받아둔 함수 바로 실행,
// 없으면 다시 받고 이 후 함수 실행
const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, prev, iter) => {
  if (!iter) {
    iter = prev[Symbol.iterator]();
    prev = iter.next().value;
  }
  for (const a of iter) {
    prev = f(prev, a);
  }
  return prev;
});

const go = (...args) => {
  reduce((a, f) => f(a), args);
};

const mult = curry((a, b) => a * b);
console.log(mult);
console.log(mult(1));
console.log(mult(1)(2));

const mult3 = mult(3);
console.log(mult3(10));
console.log(mult3(4));
console.log(mult3(3));

console.log(
  reduce(
    (a, b) => a + b,
    filter(
      (n) => n >= 20000,
      map((p) => p.price, products)
    )
  )
);
// 위 함수를 go 함수를 통해 순서를 반대로 뒤집고
go(
  products,
  // 이 함수에 products를 받아 그대로 products를 전달한다는 의미는 이 자리에 들어오는 함수가 products를 받는다는 이야기가 되고
  // 이 자리에 들어온 이 함수가 products를 받는 다는 이야기는 product를 받는 filter((p) => p.price<20000)을 평가하는 이 코드가
  // 그 자리를 대체해도 동작한다는 이야기다
  (products) => filter((p) => p.price < 20000)(products),
  (products) => map((p) => p.price)(products),
  (prices) => reduce((a, b) => a + b)(prices),
  console.log
);
// currying을 통해 더 간결한 표현을 만들어 함수를 값으로 다루는 여러가니 함수를 이용해 표현력이 높고 깔끔한 코드 가능
go(
  products,
  filter((p) => p.price < 20000),
  map((p) => p.price),
  reduce((a, b) => a + b),
  console.log
);
