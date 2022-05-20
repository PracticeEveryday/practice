const obj = { a: 1, b: 1 };

obj.c = obj.a;
console.log(obj);
console.log(obj.c === obj.a);
console.log(obj.a === obj.b);
a = obj.a;

console.log(a);
console.log(a === obj.a);
