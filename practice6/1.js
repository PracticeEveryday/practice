// 평가 : 코드가 계산 되어 값을 만드는 것

/**1급
 * 값으로 다룰 수 있다.
 * 변수에 담을 수 있다.
 * 함수의 인자로 사용할 수 있다.
 * 함수의 결과로 사용할 수 있다.
 */

// 함수는 1급이다.

const add5 = (a) => a + 5;
console.log(add5);

const f1 = () => () => 1;
console.log(f1);

const f2 = f1;
console.log(f2);
console.log(f2()());

// 일급 함수 : 함수가 값으로 다뤄질 수 있다.

// 고차함수 : 함수를 값으로 다루는 함수

// 함수를 인자로 받아 실행하는 함수

// apply1은 함수를 받아 함수에 1을 적용하는 함수
// 함수를 받아 함수를 실행하기에 고차함수이다!
const apply1 = (f) => f(1);

const add2 = (a) => a + 2;
console.log(apply1(add2)); // 3

// 함수를 값으로 받고 값도 받아 안에서 실행하며 적용하는 함수
const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};

times(console.log, 3);
times((a) => console.log(a + 10), 3);

// 함수를 만들어 리턴하는 함수 ( 클로저를 만들어 리턴하는 함수 )
// (b) => a + b 함수가 a를 기억하고 있다.
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10(10));
