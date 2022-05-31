// 구조 분해 할당
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// 10

console.log(b);
//  20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Array [30,40,50]
