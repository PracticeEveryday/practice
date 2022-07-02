const { map, filter, reduce } = require("./mapfilterreduce");

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// 가격들을 뽑는 map 함수
console.log(map((p) => p.price, products));

// 2만원 이하의 상품들만 뽑고 싶다.
console.log(filter((p) => p.price < 20000, products));
console.log(
  map(
    (p) => p.price,
    filter((p) => p.price < 20000, products)
  )
);

// 어려워 보이지만 오른쪽부터 읽어가면 된다.
// products 데이터 중 price 가격이 20000원 이하인 것만 가격을 뽑아 더해 출력해라
console.log(
  reduce(
    (a, b) => a + b,
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);

console.log(
  reduce(
    (a, b) => a + b,
    filter(
      (n) => n >= 20000,
      map((p) => p.price, products)
    )
  )
);

// 함수형 프로그래밍은 값으로부터 출발하여 하나의 값으로 평가해서 만드는 코딩이 가능하다

// => 이렇게 되면 reduce(add, ) 두번 째 인자에 평가가 되었을 때 숫자로 되는 애들만 넣으면 된다는 것을 미리 파악하고 작성하기가 쉬워진다.
// => reduce(add, map((p) => p.price, products)) map으로 평가 하였을 때 숫자들만 남아 있을 것이다라고 기대하고 코드 짜기가 가능
// => 정리 후 한 값으로 평가 된 후 console.log()로 찍어 확인할 것이라는 것을 기대할 수 있다.
