// 함수형 프로그램에서는 코드(함수)를 값으로 다루는 방식을 많이 사용함
// 코드를 값으로 다룰 수 있기에 어떤 함수가 코드인 함수를 받아서 평가하는 시점을 원하는 대로 코드의 표현력을 높일 수 있다.

// go function

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

const go = (...args) => {
  reduce((a, f) => f(a), args);
};

// reduce는 특정 리스트를 축약해 나가는 코드를 활용할 때 쉽게 만들어 나갈 수 있다.
go(
  10,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);
// a => a + 1 => a + 1 + 10 => a + 1 + 10 + 100 => log

// pipe 함수
// 함수를 리턴하는 함수
// 함수들이 나열되어 있는 함성된 함수를 만드는 함수

// fs functions!!
const pipe =
  (f, ...fs) =>
  (...as) => {
    go(f(...as), ...fs);
  };
// 3개의 함수를 연속적으로 실행하며 축약해 하나의 함수를 만드는 함수가 pipe!
const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);
console.log(f(0));

go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce((a, b) => a + b, prices),
  console.log
);
// 코드 양이 많아졌지만 읽기가 쉬워졌다!
