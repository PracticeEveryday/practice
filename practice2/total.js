const { map, filter, reduce } = require("./fx.js");

const log = console.log;

let products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const add = (a, b) => a + b;
log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);

// 코드를 값으로 다루어 표현력 높이기
// 함수형 프로그래밍은 코드를 값으로 다루는 아이디어를 많이 사용함
// 코드인 함수를 받아 평가하는 시점을 원하는 대로 다룰 수 있기에 코드의 표현력을 많이 활용 할 수 있다.
// 즉시 값을 평가하는 go!

// 인자를 통해 하나의 자료로 축약할거임
// rest 연산자를 이용해 list로 받아오기!!
// reduce 함수를 이용해 특정 코드를 줄여 나가는 데 쉽게 활용 할 수 있다!!
const go = (...args) => {
  reduce((a, f) => f(a), args);
};
go(
  add(0, 1),
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log
);
// 111

// pipe 함수 => go 함수와 다르게 함수를 리턴하는 함수 // 함수들이 나열되어 있는 합성된 함수를 만드는 함수

const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);
// 3개의 함수를 축약하여 한번에 실행하는 함수를 만들자
const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

log(f(0, 1));

go(
  products,
  (products) => filter((p) => p.price < 20000, products), // filter로 조건 가격을 뽑고
  (products) => map((p) => p.price, products), // map을통해 가격들만 뽑고
  (prices) => reduce(add, prices), // reduce로 더하겠다.
  log
);

// curry
// 코드를 함수를 값으로 받으면서 받아둔 함수를 내가 원하는 시점에 평가하는 함수
// 함수를 받아 함수를 리턴하고 인자를 받아 인자를 원하는 갯수 만큼 들어왔을 때 받아 둔 함수를 나중에 평가시키는 함수

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
// 인자가 하나 밖에 없으니 함수 리턴
log(mult(1));
// 그 다음 다시 인자 하나를 던져주면 2개로 실행함.
log(mult(1)(2));

const mult3 = mult(3);
log(mult3(10));
log(mult3(5));
log(mult3(3));

go(
  products,
  // 뭐가 간단해 졌냐 하겠지만
  // products를 받아서 filter(~~) 함수에 그대로 products를 반환한다는 이야기는 이 자리에 들어오는 함수가 products를 받는다는 뜻이되어 filter만 평가 해도 된다!
  // 밑에 map처럼 바꿀 수 있따!!
  (products) => filter((p) => p.price < 20000)(products), // filter로 조건 가격을 뽑고
  map((p) => p.price), // map을통해 가격들만 뽑고
  (prices) => reduce(add)(prices), // reduce로 더하겠다.
  log
);

// 함수 조합으로 함수 만들기
products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

const base_total_price = (predi) => pipe(filter(predi), total_price);

go(
  products,
  base_total_price((p) => p.price < 20000),
  log
);

go(
  products,
  base_total_price((p) => p.price >= 20000),
  log
);
