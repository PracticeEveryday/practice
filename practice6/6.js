// 제너레이터 / 이터레이터
// 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수 => 제너레이터는 이터레이터를 리턴하는 함수!

function* gen() {
  // yield를 통해 몇 번의 next를 통해 리턴해 줄 것인지 확인해 줄 수 있다.
  yield 1;
  yield 2;
  yield 3;
  // return 값을 주면 done이 true가 되면서 return 값을 뱉어준다!
  return 100;
}

// 제너레이터를 통해 쉽게 이터레이터를 만들 수 있다.
// 이터레이터이자 이터러블 이기도 하다
// 제너레이터는 웰폼 더 이터레이터를 반환하는 함수이다!
let iter = gen();

console.log(iter[Symbol.iterator]() === iter); // true
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 순회할 때는 return 값 없이 순회한다!!
for (const a of gen()) console.log(a);

// 제너레이터는 순회하는 값을 문장으로 만든 것이라고 할 수 있다.
function* gen2() {
  yield "안녕하세요";
  if (false) yield 2;
  yield 3;
}

for (const a of gen2()) console.log(a);
// 1 3 false를 주면 2는 안나온다!
// => 어떠한 값이나 상태든 순회할 수 있게 만들 수 있다.
// 어떤 값이든 순회할 수 있도록 만들 수 있다.

// 상징적이며 함수형 프로그래밍의 관점에서 아주 중요하다!! 제너레이터라는 문장을 통해 어떠한 값도 순회할 수 있는 함수를 만들 수 있따!~~

// number 보다 작은 값을 뽑는 제너레이터가 되었다.
function* odd(number) {
  for (const a of infinity(number)) {
    if (a % 2) yield a;
    if (a === number) return;
  }
}

let iter2 = odd(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

// 내가 원하는 만큼 next() 부르는 것만큼 부를 수 있음!!!
// 무한히 값을 생성하지만 이터레이터의 next를 평가할 때 까지만 동작하기에 while( true )의 코드를 짠다고 해서 브라우저가 멈추거나 서버가 터지지 않는다! 무한 수열 표현 가능!!
function* infinity(number = 0) {
  while (true) yield number++;
}

let iter3 = infinity();
console.log(iter3.next());

function* limit(number, iter) {
  for (const a of iter) {
    yield a;
    if (a === number) return;
  }
}

const limit1 = limit(10, [1, 2, 3]);
console.log(limit1.next());
console.log(limit1.next());
console.log(limit1.next());
console.log(limit1.next());

// 값으로 문장을 다룰 수 있게 된다!!
