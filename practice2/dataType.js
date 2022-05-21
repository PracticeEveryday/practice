var NewConstructor = function () {
  console.log("this is new constructor!");
};

var dataTypes = [
  1,
  "test",
  true,
  {},
  [],
  function () {},
  new Number(),
  new String(),
  new Boolean(),
  new Object(),
  new Array(),
  new Function(),
  new RegExp(),
  new Date(),
  new Error(),
];

dataTypes.forEach(function (d) {
  d.constructor = NewConstructor;
  console.log(d.constructor.name, "&", d instanceof NewConstructor);
});

var Person = function (name) {
  this.name = name;
};

var p1 = new Person("사람1");
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor("사람2");
var p3 = new p1Proto.constructor("사람3");
var p4 = new p1.__proto__.constructor("사람4");
var p5 = new p1.constructor("사람5");

personList = [p1, p2, p3, p4, p5];

personList.forEach(function (p) {
  console.log(p, p instanceof Person);
});

console.log(new Person());
console.log(new Person().constructor);

console.log(Person());
// console.log(Person().constructor);
console.log(new Person());
console.log(new Person().constructor);
console.log(new Person() === { name: undefined });

const test = new Person();
console.log(test === { name: undefined });
console.log(test);
console.log(test.__proto__);
console.log({ name: undefined });
console.log({ name: undefined }.__proto__);

console.clear();

arr = [1, 2];

console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.constructor === Array);

arr2 = Array.prototype.constructor(1, 2);
console.log("arr", arr);
console.log("arr2", arr);
console.log(arr === arr2);

console.log(arr.__proto__.constructor === Array.prototype.constructor);
console.log(arr.constructor === Array);
// constructor를 통해 인스턴스의 원형이 무엇인지 알 수 있게 된다.

arr3 = new Array(1, 2);
console.log("arr3", arr3);

arr4 = Array(1, 2);
console.log("arr4", arr4);

function Person2(name, age) {
  this.name = name;
  this.age = age;
}

per1 = new Person2("kim", 28);
console.log("per1", per1);

// per2 = Person2("kim", 27);
// console.log("per2", per2);

// console.log(Person2 === Person2.prototype.constructor);
// per3 = new Person2.prototype.constructor("kim", 26);
// console.log(per3);

// per4 = Person2.prototype.constructor("kim", 25);
// console.log("per4", per4);

console.log(per1.__proto__);
console.log(Person2.prototype);

console.log(per1.__proto__.constructor); // 원형을 알기 위한 수단이다!!!
console.log(Person2.prototype.constructor);

console.log(Person2.prototype.constructor("kim"));
console.log(Person2.prototype.constructor("lee"));
console.log(per1.__proto__);
