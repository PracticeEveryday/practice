// 구조 분해 할당
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// 10

console.log(b);
//  20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Array [30,40,50]

var x = [1, 2, 3, 4, 5];

var [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const foo = [1, 2, 3];

const [one, two, three] = foo;
console.log(one, two, three);

var a, b;

[a, b] = [1, 2];

console.log(a, b); // 1, 2

var a, b;
[a = 5, b = 7] = [1];
console.log(a, b); // 1 , 7

var a = 1;
var b = 3;
[a, b] = [b, a];
console.log(a, b); // 3, 1

function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a, b); // 1, 2

var [a, ...b] = [1, 2, 3];
console.log(a, b);
