function add(a, b) {
  return a + b;
}

add.prototype.sayHello = console.log("hello");

console.log(add.prototype); // { sayHello: undefined } => 내가 정의 될 때 만들어지는 prototype 객체
console.log(add.prototype.constructor); // [Function : add]
console.log(add.__proto__); // {} => 내가 참조하고 있는 원형 객체 (나를 만들어준 객체)

const son = new add(1, 2);
console.log(son); // add {a:1, b:2}
console.log(son.a, son.b); // 1 2
console.log(son.__proto__); // {}
console.log(son.prototype); // undefined
