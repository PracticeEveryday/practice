const log = console.log;

// 제너레이터/ 이터레이터
// 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수 === 이터레이터를 리턴하는 함수
// generator : 발전기
function* gen() {
  // yield를 통해 몇번의 next를 통해 값을 꺼내줄 것인가 정할 수 있음
  yield 1;
  if (false) yield 2;
  // done이 true 가 되면서 return 값이 전달됨! done을 할때 나오는 값
  return 100;
}

let iter = gen();
// 이터레이터는 에터레이터이자 이터러블이다.
// Symbol.iteror를 가지고 있고
log(iter[Symbol.iterator]);
// Symbol.iteror의 결과는 자기 자신이다
// 그러니 제너레이터는 well-formed iterator를 리턴하는 함수이다.
log(iter[Symbol.iterator]() == iter);

log(iter.next());
log(iter.next());
log(iter.next());

// 제너레이터의 리턴 결과가 이터레이터 이기 때문에 바로 순회 가능
// 순회할 때 return 값은 없이 순회됨!
for (const a of gen()) log(a);

// 순회할 값을 문장으로 표현하는 것 제너레이터! -> 문장을 값으로 만들 수 있고 이 문장을 통해 순회할 수 있는 값을 만들 수 있어 이 제너레이트를 통해 어떠한 상태나 값이든 사실상 순회 할 수 있게 만들 수 있다!! 어떠한 값도 순회할 수 있다!
// 어떠한 값이든 리터러블이면 순회가능

// odd

function* infinity(i = 0) {
  while (true) {
    yield i++;
  }
}
// 무한 루프를 만들었지만 yield하면 멈추기 때문에!! 내가 하고 싶은 만큼 돌릴 수 있다
let inf = infinity();
log(inf.next());
log(inf.next());
log(inf.next());

function* limt(num: number, iter: any) {
  for (const a of iter) {
    yield a;
    if (a == num) return;
  }
}
let iter4 = limt(4, [1, 2, 3, 4, 5, 6]);
log(iter4.next());
log(iter4.next());
log(iter4.next());
log(iter4.next());
log(iter4.next());
log(iter4.next());

function* odds(num: number) {
  for (const a of limt(num, infinity(1))) {
    if (a % 2) yield a;
  }
}
let iter2 = odds(10);
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());

for (const a of odds(40)) log(a);

// 문장으로 만들어 진것을 순회할 수 있음!!

// for of, 전개 연산자, 구조 분해, 나머지 연산자

log(...odds(10));
log(...odds(10), ...odds(20));

const [head, ...tail] = odds(5);
log(head);
log(tail);

const [a, b, ...rest] = odds(10);
log(a);
log(b);
log(rest);
