const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

//  map
let names = [];
for (const a of products) {
  names.push(a.name);
}

console.log(names);

let prices = [];
for (const a of products) {
  prices.push(a.price);
}

console.log(prices);

// 인자(products => iter )를 넘겨 줌으로써 상품뿐 아니라 iterable 모두를 반환할 수 있는 함수가 됨 iter라고 지은 이유는 iterable 프로토콜을 따른다는 것을 명시해 주기 위해서이다
const map = (f, iter) => {
  let res = [];
  // 보통은 names를 뽑을 거다라고 이야기하지만 map같은 함수는 추상화 과정을 거쳐 상용화를 진행한다.
  // 첫번째 인자로 함수 ( f )를 받아 어떤 값을 수집할 것인지 함수에게 완전히 위임을 한다.
  // product를 줄테니까 여기에 수집할 값을 줘라 라는 뜻!
  for (const p of iter) {
    res.push(f(p));
  }
  // console.log는 함수 내에서 외부의 직접적인 변화를 일으키는데 함수형 프로그래밍에서는 인자와 리턴값으로 소통하는 것을 권장한다. so names를 변화를 일으키는 다른 매서드나 함수에 보내는 것이 아니라 결과를 return해서 return되는 값을 개발자가 그 이후에 변화를 일으키는가 하는 등으로 사용하도록 한다.
  return res;
};

console.log(map((p) => p.name, products));
// map이라는 함수에 보조 함수를 통해 이 배열, 이터러블 안에 있는 어떤 1:1으로 매핑되는 값을 보조하는 식으로 사용하게 된다.
// map은 고차함수 이기도 하다!

// 이터레이터 이터러블 프로토콜을 따르기만 하면 뭐든 다 사용가능 => 다형성 엄청 높음!
// 문장 역시도 map 가능... 사실상 모든 것들 맵 가능 ㅠㅠ
function* gen() {
  yield 2;
  yield 2;
  yield 2;
}

console.log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
const iter = m[Symbol.iterator]();
console.log(iter.next());

console.log(map(([k, a]) => [k, a * 2], m));
// 다시 map 객체 생성 가능 => 안 쪽 값이 바뀐 맵 객체 생성 가능!
console.log(new Map(map(([k, a]) => [k, a * 2], m)));
