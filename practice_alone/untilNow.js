// 평가 : 코드가 계산 되어 값을 만드는 것
/**
 *  일급 : 값으로 다룰 수 있다.
 *  변수에 담을 수 있다.
 *  함수의 인자로 사용될 수 있다.
 *  함수의 결과로 사용될 수 있다.
 */
const log = console.log;
const clear = console.clear;

const a = 10;
const add10 = (a) => a + 10;
const r = add10(a);
log(r);

// 일급 함수 : 함수를 값으로 다룰 수 있다!!
const add5 = (a) => a + 5;
log(add5);

// 평가해 값을 다른 함수로 전달 가능
log(add5(5));

// 함수의 결과값으로 함수를 사용 할 수 있음.
const f1 = () => () => 1;
log(f1());

const f2 = f1();
log(f2);
// 담겨진 함수를 평가해 담을 수 있다.

log(f2());
// 조합성화 추상화의 도구로 함수를 사용할 수 있다.

clear();

const list = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
  log(list[i]);
}

for (const a of list) {
  log(a);
}

clear();

// iterator
const arr = [1, 2, 3];
let iter1 = arr[Symbol.iterator]();
for (const a of iter1) log(a);

/**
    - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값 
    - 이터레이터: { value, done } 객체를 리턴하는next() 를 가진 값 
    - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
 */

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      // symbol.iterator를 사용한 iterator를 iterator화 하면 자기 자신이 된다!!
      // 이거 까지 구현되어 있어야 웰 던 이터레이터
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
