// // const obj2 = {
// //   foo: function () {
// //     console.log("foo this", this);
// //     function bar() {
// //       console.log("bar this", this);
// //       console.log(this.a);
// //     }
// //     bar();
// //   },
// // };
// // global.a = 1;
// // function bar() {
// //   console.log("bar this", this);
// //   console.log(this.a);
// // }
// // bar();
// // obj2.foo();
// // console.log(bar.this === obj2.foo.this);
// // console.log(obj2.foo.this); // undefined 함수가 호출될 때 this 가 바인딩 된다!!
// // console.log(bar);

// const obj = {
//   c: "a",
//   // obj의 프로퍼티 a가 가리키고 있는 게 function 함수일 뿐이다!!
//   // 가리키고 있는 function 함수의 실행 컨텍스트는 global이다!
//   a: function () {
//     console.log(this.c);
//     const test = 1;
//     const c = 2;
//     console.log(obj.c);
//     return function b() {
//       console.log(test);
//       console.log(this.b);
//       console.log(c);
//     };
//   },
// };
// // 이게 클로저
// // obj.a()();

// function add(a, b) {
//   return a + b;
// }
// // console.log(add);
// // console.log(typeof add);

// function a() {
//   const d = 1;
//   // 함수는 call stack에 쌓이는 것임!!
//   function b(a, b) {
//     console.log(d); // scope 체인에 의해서 a의 d를 가져옴
//     console.log(this); // this context는 global이 됨!!
//     // this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수
//     return a + b;
//   }
//   console.log(b(1, 2));
// }

// // a();

// console.log(Function);
// console.log((Function.prototype.a = 1));

// const sum = new Function("a", "b", "return a + b");
// sum.prototype.a = 1;
// console.log(sum.prototype);
// console.log(sum);
// console.log("name", sum.name);
// console.log(sum.prototype.prototype);
// console.log(sum.__proto__);

// console.log(sum(2, 6));
// // expected output: 8

// const sum2 = (a, b) => {
//   return a + b;
// };
// console.log(sum2);
// console.log(sum2.prototype);
// // console.log(sum2.prototype.prototype);
// console.log(sum2.__proto__);

// const sum3 = function (a, b) {
//   return a + b;
// };
// console.log(sum3);
// console.log("name", sum3.prototype.name);
// console.log(sum3.prototype.prototype);
// console.log(sum3.__proto__);
// console.log(Function instanceof Object);
// console.log(Object.getOwnPropertyNames(Function));
// console.log(Object.getOwnPropertyNames(Array));
// console.log(Object.getOwnPropertyNames(String));
// console.log(Object.getOwnPropertyNames(Number));
// console.log(Object.getOwnPropertyNames(Symbol));

// console.log(Function.prototype);
// console.log(Array.prototype);
// console.log(String.prototype);
// console.log(Number.prototype);
// console.log(Symbol.prototype);

// 변수고 객체 참조 변수고
// 자기 참조 변수는 함수를 호출 할 때 생긴다!!
// var name = "Kai";
//  main()의 변수인가보다
// global.name = "kim";
// console.log(name);
// init(); // init 실행문맥 생성. 내부 정의(name, displayName) 호이스팅
// function init() {
//   var name = "Steve";
//   function displayName() {
//     console.log(name); // 현재 실행문맥 내에 정의된게 없으니 outer 로 chain
//     console.log(this.name);
//    var name = 'troll?'; // 주석 해제되면 호이스팅
//   }
//   displayName(); // displayName 실행문맥 생성. 내부 정의 호이스팅.
// }

function a() {
  console.log(this);
}
a(); // global

function b() {
  function c() {
    console.log(this);
  }
  c();
}

b(); // global

console.log(a() === b()); // true

const obj = {
  this: "this",
  b: 1,
  a: function () {
    console.log(this);
    return this;
  },
};

obj.a();
console.log(obj.a() === obj); // true
console.log(obj.a().b); // 1
console.log(obj.this); // undefined
// this는 함수를 호출할 때 생긴다!!
// 이걸 잊지마라!

class person {}

console.log(person);
console.log(person.prototype);
console.log(typeof person); // function 의 신텍스 슈가

console.log(Function instanceof Object); // true

console.log(Object.getOwnPropertyNames(Object));
console.log(Array.prototype);
console.log(String);
console.log(Symbol);

const z = () => {
  console.log(1);
};

z();

console.log(() => {
  console.log(1);
});

console.log(console);
