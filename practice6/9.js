const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let under20000 = [];
for (const a of products) {
  if (a.price < 20000) under20000.push(a);
}
console.log(under20000);

let over20000 = [];
for (const a of products) {
  if (a.price >= 20000) over20000.push(a);
}
console.log(over20000);

// filter 특정 상품만 걸래냄
const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    // f(a가 참이면!!)
    if (f(a)) res.push(a);
  }
  return res;
};

console.log(filter((p) => p.price < 20000, products));
console.log(filter((p) => p.price >= 20000, products));

// filter 내부 iter가 key value 쌍이 아니더라도 보조 함수를 통해 다형성을 보장 할 수 있다.
// 외부 값의 경우엔 이터러블 프로토콜을 따를 경우 다형성을 보장해 줄 수 있다.
console.log(filter((p) => p % 2, [1, 2, 3, 4]));
