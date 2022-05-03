const log = console.log;

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

let names = [];
for (const a of products) {
  names.push(a.name);
}

let prices = [];
for (const a of products) {
  prices.push(a.price);
}
log(names);
log(prices);

//map

const map = (
  f: { (p: any): any; (arg0: any): any },
  iter: { name: string; price: number }[]
) => {
  let names = [];
  for (const a of iter) {
    names.push(f(a));
  }
  // log(names) => 이 log가 map블록 외부의 세상에 직접적으로 일으킴! 함수형 프로그래밍은 인자와 리턴값으로 소통하는 것을 권장해 외부에 직접적으로 변화를 일으키는 함수에 보내지 않고 return으로 보내주고 외부에서 사용할 수 있도록 하는 걸 권장함
  return names;
};

// map이라는 함수의 보조 함수를 통해서 2번째 인자 이터러블 안에 있는 값을 사용해서 전달해 주겠다 라는 것
log(map((p) => p.name, products));
log(map((p) => p.price, products));
