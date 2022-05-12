function funcDeclarations() {
  return "A function declaration";
}
funcDeclarations();

var funcExpression = function () {
  return "A function expression";
};
funcExpression();

a();
console.log(a()); // hoisting now
// var 변수도 hoisting됨!!
console.log(b); // undefined
// 근데 함수 실행은 정의 이후에 실행됨
b(); // typeError : b is not a function

console.log(c); // let은 안 돼!

function a() {
  return "hoisting now";
}

var b = function () {
  return "plz hoisting now";
};
let c = 1;
