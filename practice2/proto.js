// // function add(a, b) {
// //   return a + b;
// // }

// // 함수 === 객체 ===> 메모리 할당 ===> 메모리 할당이 어떻게 되는가?
// // call Stack

// // 자바스크립트 엔진 V8 ==> 2 자료 구조
// // memory heap <==  // Call Stck <== 함수 ==> 실행 컨텍스트 그 자체 환경 설정

// // add.prototype.a = 1;

// // console.log(Function);
// // console.log(Function.prototype); // Function: Function
// // Function.__proto__.a = 100;

// // console.log(add.prototype);
// // console.log(add.__proto__);

// // const add1 = new add();
// // console.log(add1.__proto__);

// // str = "abcdef";
// // console.log(str.a);
// // console.log(str.toLocaleUpperCase());
// // console.log(String);
// // console.log(String instanceof Object); // true String === 객체다

// // console.log("this : ", this); // main()의 this인거지

// // function a() {
// //   function b() {
// //     function c() {
// //       b();
// //     }
// //     c();
// //   }
// // }

// // console.log(globalThis);
// // console.log(globalThis.str);

// // const obj = {
// //   a: 1,
// //   b: 2,
// //   addab: function () {
// //     // method
// //     console.log(this); //{ a: 1, b: 2, addab: [Function: addab] }
// //     console.log(this === obj); // true
// //     console.log(this.a, this.b);
// //     function c() {
// //       console.log(this); // 1. obj 2. globalThis
// //     }
// //     c();
// //   },
// // };

// // obj.addab();
// // // this는 함수가 호출될 때 생기는 객체에요

// // // 함수는 프로토타입이다.
// // // 함수는 프로토타입 객체를 가진다.
// // // 프로토타입 객체의 constructor 프로퍼티를 통해 객체를 복제할수 있다.
// // // 복제라는 말을 생각해보자

// // function a() {
// //   console.log(this);
// // }

// // call by value , call by reference

// // const a = 1;
// // const b = 1;

// // const c = {
// //   a: 1,
// //   b: 1,
// // };
// // function add(a) {
// //   // a, b는 매개변수 parameter 매개만 해주는 변수
// //   //a = 2;
// //   a.a = 2;
// // }
// // add(a);
// // console.log(a);
// // // call by value

// // add(c);
// // console.log(c);
// // // call by reference
// // // arguments면서 인자 => 실제값

// // newVar = 23; // 원시 타입
// // myNumber = 24;
// // myString = "abcd";

// // myArray = [];

// const str = "abcde"; // 원시타입
// console.log(typeof str); // string
// console.log(str); // abcde
// // ----------------------원시타입
// // str의 값을 알고 있는 String 객체가 생성되요 => str
// console.log(str.length); // 5

// console.log(str.toLocaleLowerCase()); // 객체
// console.log(str.a); // undefined
// console.log(str.toLocaleUpperCase());
// console.log(str.__proto__ === String.prototype); // true
// console.log(String);
// console.log(Object.getOwnPropertyNames(String));
// // str 객체를 활용하다가

// console.log(str);

// const strUpper = str.toLocaleUpperCase();
// console.log(strUpper);
// console.log(str);

// // 함수는 프로토타입이다.
// console.log(String.prototype);
// String.prototype.a = 1;
// console.log(String.prototype);
// console.log(str.__proto__);
// console.log(str.a);

// str2 = "ab";
// console.log(str2.__proto__);

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("kim", 28);
console.log(user1);
console.log(user1.isAdmin);

function BigUser() {
  this.name = "원숭이";
  return { name: "고릴라" };
}

console.log(new BigUser());

function SmallUser() {
  this.name = "원숭이";
  return;
}

console.log(new SmallUser());
console.log(new SmallUser());

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(this.name);
  };
}

let bora = new User("보라");
bora.sayHi();

console.clear();
let obj = {};
console.log(obj.toString()); // [object Object]
console.log(obj); // {}
obj = new Object();
console.log(obj); // {}
console.log(obj.__proto__); // [Object: null prototype] {}
console.log(Object.prototype); //[Object: null prototype] {}

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.__proto__.toString === Object.prototype.toString); // true
console.log(obj.__proto__.toString === obj.toString); // true

console.log(Object.prototype.__proto__); // null

let arr = [1, 2, 3];

// arr은 Array.prototype을 상속 받음
console.log(arr.__proto__ === Array.prototype); // true
// arr은 Object.prototype을 상속 받음
console.log(arr.__proto__.__proto__ === Object.prototype); // true
// 체인 맨 위엔 null이 있다.
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(arr); //[1, 2, 3]
console.log(arr.toString()); // 1, 2, 3

function f() {}

console.log(f.__proto__ === Function.prototype);
console.log(f.__proto__.__proto__ === Object.prototype);
