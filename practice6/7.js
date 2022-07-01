// 제너레이터는 이터러블 프로토콜을 따르기에 for of, 전개 연산자, 구조 분해, 나머지 연산자 등 이터러블 프로토콜을 따르고 있는
// 아이들을 사용 할 수 있다.

function* odds(number) {
  for (const a of limit(number, infinity(1))) {
    if (a % 2) yield a;
  }
}

function* infinity(number = 0) {
  while (true) yield number++;
}

function* limit(number, iter) {
  for (const a of iter) {
    yield a;
    if (a === number) return;
  }
}

console.log(odds(10).next());

console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
console.log(head);
console.log(tail);

// javaScrit에는 이터레이터 이터러블 프로토콜을 따르는 많은 문법이 있다 활용 잘 해보시길
