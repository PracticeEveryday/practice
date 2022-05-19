// var a = 1; // 전역 컨텍스트

// function outer() {
//   // outer context
//   function inner() {
//     // inner c
//     console.log(a); // 3

//     var a = 3;
//     console.log(a); // 1
//   }
//   inner();
//   console.log(a); // 1
// }

// outer();
// console.log(a);

// console.clear();

// function func(x) {
//   console.log(x); // 1
//   var x;
//   console.log(x); // 1
//   var x = 2;
//   console.log(x); // 2
// }

// func(1);
// console.log(a);

// function a() {
//   console.log(b);
//   var b = "bbb";
//   console.log(b);
//   function b() {}
//   console.log(b);
// }
// a();

// function a() {
//   console.log(b); // function b
//   var b = "bbb";
//   console.log(b); // bbb
//   function b() {}
//   console.log(b); // bbb
// }
// a();

// function a() {
//   var b;
//   function b() {}

//   console.log(b); // function b
//   b = "bbb";
//   console.log(b); // bbb
//   console.log(b); // bbb
// }
// a();

// function a() {
//   console.log(b); // undefined
//   var b = "bbb";
//   console.log(b); // bbb
//   var b = function () {}; // b에 익명함수를 할당했다.
//   console.log(b); // function b
// }
// a();

// function a() {
//   var b;
//   var b;

//   console.log(b); // undefined
//   b = "bbb";
//   console.log(b); // bbb
//   b = function () {}; // b에 익명함수를 할당했다.
//   console.log(b); // f () {}
// }
// a();

var a = 1; // 전역 컨텍스트
function outer() {
  // outer 컨텍스트
  function inner() {
    // inner 컨텍스트
    console.log("1 :", a); // 1: undefined
    var a = 3;
    console.log("2 :", a); // 2 : 3
  }
  inner();
  // inner가 실행될 때 outer의 LexcicalEnvironemnt를 outerEnvironmentReference로 참조한다.
  console.log("3 :", a); // 3: 1
}

outer();
// outer가 실행될 때 전역 컨텍스트의 LexcicalEnvironemnt를 outerEnvironmentReference로 참조한다.
console.log("4 :", a); // 4: 1

console.log(eval());
