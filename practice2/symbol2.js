const a = Symbol("a");
console.log(a); // Symbol(a)
console.log(a.description); // a

const b = Symbol.for("b");
console.log(b); // Symbol(b)
console.log(b.description); // b
console.log(Symbol.keyFor(b)); // b

const c = Symbol.for("b");
console.log(b === c); // true
console.log(a === c); // false

console.log(Symbol.keyFor(a)); // undefined
