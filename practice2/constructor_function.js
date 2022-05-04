let arr = [1, 2, 3, 4, 5];

let sliceArr = arr.slice(0, 3);
console.log(sliceArr); // [1, 2, 3]

console.log(arr.__proto__); // Object(0) []
console.log(arr.__proto__.slice); // [Function: slice]

function person(name) {
  this.name = name;
}

let me = new person("kim");
console.log(me.prototype); // me는 만들어진 객체이므로 prototype 객체 없음 undefined
console.log(me.__proto__); // {}
console.log(me.__proto__.__proto__); //[Object : null prototype] {}
console.log(me.__proto__.__proto__.valueOf); // [Function: valueOf]

console.log(me.__proto__.__proto__.__proto__); // null
//console.log(me.__proto__.__proto__.__proto__.__proto__); error

person.prototype.getName = function () {
  return console.log(this.name);
};

console.log(me); // person // {name:'kim'}
console.log(me.__proto__); // {getName: [Function (anonymous)]}
me.getName(); // kim

/**
 *
 * 1. person 함수 정의
 * 2. person 함수를 정의하는 동시에 JS는 내부적으로 person의 프로토타입 객체 생성
 * 3. person prototype 객체에는
 *    constructor => 객체 생성 가능 와 prototype link가 존재
 * 4. person.prototype 객체에 getName 메소드 정의
 * 5. person1 변수 생성 person 함수의 생성자로 객체 생성 후 할당
 * 6. person1 객체 생성
 * 7. person1 객체는 함수를 정의한 것이 아니기에 prototype 객체는 존재하지
 *    않고 person1 객체의 prototype link가 person 함수의 prototype 객체를
 *    링크로 참조할 뿐이다
 * 8. person1 객체는 person 함수의 프로토타입 객체의 constructor 로 만들어
 *    졌으므로 (메소드를 상속) person 함수의 메소드를 사용할 수 있는 것입니다.
 */

console.clear();

function Person(name) {
  this.name = name || "홍길동";
}

Person.prototype.getName = function () {
  return this.name;
};

function Korean(name) {}
console.log(Korean.__proto__); // {} 빈 프로토타입 객체 참조(메서드 정의x)
Korean.prototype = new Person();
console.log(Korean.prototype); // Person {name: 홍길동}
console.log(Korean.__proto__); // {}

var kor1 = new Korean();
console.log(kor1.getName()); // 홍길동
console.log(kor1.prototype); // Person {name: 홍길동} // 만들어진 객체이므로 prototype은 undefined
console.log(kor1.__proto__); // Person {name: '홍길동'} 만들어진 new Person()의 객체를 참조

// Korean함수의 인자 name이 Person 함수의 name과 연결되어 있지 않아 홍길동이 찍힘
var kor2 = new Korean("류현진");
console.log(kor2.getName()); // 홍길동

/**
 * 1. Person 함수 정의 + 동시에 Person 함수의 프로토타입 객체 생성
 * 2. Person 함수의 프로토타입 객체에 getName 메소드 정의
 * 3. Korean 함수 정의 + 동시에 Korean 함수의 프로토타입 객체 생성
 * 4. Korean 함수의 프로토타입 링크는 기본적으로 자신의 프로토타입 객체를
 *    참조함.
 * 5. Korean 함수의 prototype link를 Person 함수를 생성자로 호출한 객체로
 *    변경
 *    Korean 함수의 prototype link = Korean 함수의 프로토타입 객체 ->
 *    Person 함수 생성자 호출로 생성된 객체
 * 6. Person 함수의 프로토타입 객체의 getName 메소드를 사용할 수 있습니다
 */
