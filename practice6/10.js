// reduce는 값을 축약하는 함수
// 이터러블 값을 하나의 값으로 다른 값으로 축약 해 나가는 함수

const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums) {
  // 특정 값을 순회하며 하나의 값으로 누적해 나갈 때 이런 코드와 패턴이 필요하다.
  total = total + n;
}

console.log(total);

const reduce = (f, prev, iter) => {
  if (!iter) {
    iter = prev[Symbol.iterator]();
    console.log(iter[0]); //undefined
    prev = iter.next().value;
    for (const a of iter) {
      prev = f(prev, a);
    }
    return prev;
  } else {
    // => add(add(add(add(add(0,1),2),3),4),5)
    // reduce 내부가 함수를 재귀적으로 실행하도록 해야한다.
    for (const a of iter) {
      prev = f(prev, a);
    }
  }
  return prev;
};

const add = (a, b) => a + b;

// reduce( 함수, 시작값, iterator)
console.log(reduce(add, 0, [1, 2, 3, 4, 5]));

console.log(reduce(add, [1, 2, 3, 4, 5]));

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// reduce는 보조함수를 통해 어떻게 축약할지를 완전히 위임하기 때문에 복잡한 데이터 형태 역시 특별한 데이터 형태로 축약하는 데 어려움이 없다.
console.log(
  reduce((a, b) => {
    console.log(a);
    console.log("a", a.price); // a가 숫잔데 a.price 찾으면 undefined지!!
    console.log("b", b.price);
    return a.price + b.price;
  }, products)
);

// reduece 역시 보조 함수로 안쪽 값의 다형성을 보조하고 이터러블을 통해 외부 값의 다형성도 보조해준다!
console.log(
  reduce((total_price, product) => total_price + product.price, 0, products)
);
