// 값을 축약하는 함수
const log = console.log;
const nums = [1, 2, 3, 4, 5];

let total = 0;
for (const n of nums) {
  total = total + n;
}

log(total);

// reduce(콜백함수, 초기값, 배열)
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;

// reduce(콜백함수, 시작값, 데이터)
log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
// 15

log(reduce(add, 0, [1, 2, 3, 4, 5]));

// 이렇게 주면
log(reduce(add, [1, 2, 3, 4, 5]));
// 첫번쨰 값을 꺼내서 동작하는 식으로 함!!
log(reduce(add, 1, [2, 3, 4, 5]));

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

log(reduce((total_price, product) => total_price + product.price, 0, products));
