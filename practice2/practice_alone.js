const log = console.log;
// 평가 : 코드가 계산(Evaluation) 되어 값을 만드는 것!!

/**
 *  1급
 *  값으로 다룰 수 있다. 수학에서 방정식을 풀어 나오는 해 또는 근이나 산술 연산식에서 나오는 결과들을 의미한다. 이러한 값을 영어로 value라고 한다.
 *  변수에 담을 수 있다.           (a = console.log(a))
 *  함수의 인자로 사용될 수 있다.  (매개 변수)
 *  함수의 결과로 사용 될 수 있다. (return)
 */
const a = 10;
const add10 = (a) => a + 10;
const r = add10(a);
log(r);

/**
 * 일급 함수
 * 함수를 값으로 다룰 수 있다.
 */

const add5 = (a) => a + 5;
log(add5);
log(add5(5));

const f1 = () => () => 1;
log(f1()); // function
log(f1()()); // 1

const f2 = f1();
log(f2);
log(f2());

// 일급 함수 : 함수가 값으로 다뤄질 수 있다.
// 고차 함수 : 함수를 값으로 다루는 함수
// 함수를 인자로 받아서 실행하는 함수

const apply1 = (f) => f(1);
const add2 = (a) => a + 2;
log(apply1(add2)); // 3
log(apply1((a) => a - 1)); // 0

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};

times(log, 2);
console.clear();

// 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
const addMaker = (a) => (b) => a + b;
const add15 = addMaker(15);
log(add15(5));
log(add15(10));

// (클로저를 만들어 리턴하는 함수)
const getClosure = () => {
  var text = "variable 1";
  return () => {
    return text;
  };
};

var closure = getClosure();
console.log(closure()); // 'variable 1'

var base = "Hello, ";
const sayHelloTo = (name) => {
  var text = base + name;
  // return 되는 이 함수가 부모 text 변수를 동봉해서 가지고 있다. 그래서 밑에서 sayHello('승민')()을 실행하면 text에 대입된 "승민"을 불러올 수 있는 것이다.
  return () => {
    console.log(text);
  };
};

sayHelloTo("승민")();
sayHelloTo("현섭")();
sayHelloTo("유근")();

// 일반적으로 JavaScript에서 객체지향 프로그래밍을 말한다면 Prototype을 통해 객체를 다루는 것을 말한다. ES2015에는 클래스도 있지만 이걸 이야기하면 너무 삼천포로 빠지므로 넘어가도록 하고..

// 여하튼 Prototype을 통한 객체를 만들 때의 주요한 문제 중 하나는 Private variables에 대한 접근 권한 문제이다. 예제 코드를 보자.

// 생성자 함수
function Hello(name) {
  this._name = name;
}

Hello.prototype.say = () => {
  console.log("Hello, " + this._name);
};

var hello1 = new Hello("승민");
var hello2 = new Hello("현섭");
var hello3 = new Hello("유근");

hello1.say(); // 'Hello, 승민'
hello2.say(); // 'Hello, 현섭'
hello3.say(); // 'Hello, 유근'
hello1._name = "anonymous";
hello1.say(); // 'Hello, anonymous'

// 특별히 인터페이스를 제공하는 것이 아니라면, 여기서는 외부에서 _name에 접근할 방법이 전혀 없다. 이렇게 은닉화도 생각보다 쉽게 해결할 수 있다.

function hello(name) {
  var _name = name;
  return function () {
    console.log("Hello, " + _name);
  };
}

var hello1 = hello("승민");
var hello2 = hello("현섭");
var hello3 = hello("유근");

hello1(); // 'Hello, 승민'
hello2(); // 'Hello, 현섭'
hello3(); // 'Hello, 유근'

var i;
for (i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

var i;
for (i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 100);
  })(i);
}
