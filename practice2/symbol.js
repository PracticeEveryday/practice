const symbolA = Symbol("symbol");
const symbolB = Symbol("symbol");
console.log(symbolA, symbolB); // Symbol(symbol), Symbol(symbol)

console.log(symbolA === symbolB); // false

const a = Symbol("a");
console.log(a); // Symbol(a)
console.log(a.description); // a
console.log(a.toString()); // Symble(a)
console.log(!a); // false
// console.log(a + "hi"); Error

console.log(a.__proto__); // Object [Symbol] {}
console.log(a.prototype); // undefined not 함수

console.clear();

const symA = Symbol.for("a");
const symB = Symbol.for("a");

console.log(symA === symB);
console.log(Symbol.keyFor(symA));
console.log(Symbol.keyFor(symB));

console.clear();

//자바스크립트에서 enum을 사용하려면 객체 변경을 방지하기 위해 객체를 동결하는 Object.freeze 메서드와 심볼 값을 사용한다.
const Direction = Object.freeze({
  UP: Symbol("up"),
  Down: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
});

console.log(Direction.UP);
console.log(Symbol.keyFor(Direction.UP)); // undefined
Direction.UP = "hello";
console.log(Direction.UP); // Symbol("up")

console.clear();

var symbolProperty = Symbol("key"); // Symbol(key)
var ob = {};

ob[symbolProperty] = "value";

console.log(ob[symbolProperty] === "value");
console.log(typeof symbolProperty === "symbol");

console.log(ob);
// {Symbol(key): "value"}

var symbolProperty1 = Symbol("key"); // Symbol(key)
var symbolProperty2 = Symbol("key"); // Symbol(key)
var ob = {};

ob[symbolProperty1] = "value1";
ob[symbolProperty2] = "value2";

console.log(ob[symbolProperty1] === "value1");
console.log(ob[symbolProperty2] === "value2");
console.log(symbolProperty1 !== symbolProperty2);

console.log(ob); // {Symbol(key): "value1", Symbol(key): "value2"}

console.clear();

// Create symbols
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("bar");

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(foo)
console.log(sym3); // Symbol(bar)

console.log(typeof sym1); // symbol
console.log(typeof sym2); // symbol
console.log(typeof sym3); // symbol

const sym4 = Symbol("foo");

console.log(sym1 === sym1); // true

console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false

console.clear();

const obj = {};

obj.propertyKey1 = "propertyValue1";
obj["propertyKey2"] = "propertyValue2";

obj[3] = "propertyvalue3";
console.log(obj);
/**
 * {
 *  '3': 'propertyvalue3', 
 *  propertyKey1: 'propertyValue1', 
 *  propertyKey2: 'propertyValue2' 
}
 */

const obj2 = {};

const sym5 = Symbol();
const sym6 = Symbol("foo");
const sym7 = Symbol("foo");

obj2[sym5] = "propertyValue1";
obj2[sym6] = "propertyValue2";
obj2[sym7] = "propertyValue3"; // no conflict with sym6

console.log(obj2); // {Symbol(): 'propertyValue1', Symbol(foo): 'propertyValue2', Symbol(foo): 'propertyValue3'}

console.log(obj2[sym5]); // propertyValue1
console.log(obj2[sym6]); // propertyValue2
console.log(obj2[sym7]); // propertyValue3

const unsharedSym = Symbol("foo");
const symKey1 = Symbol.keyFor(unsharedSym);
console.log(symKey1); // undefined

const sharedSym = Symbol.for("foo");
const symKey2 = Symbol.keyFor(sharedSym);
console.log(symKey2); // foo

console.clear();

const obj3 = {};

obj3[Symbol("a")] = "a";
obj3[Symbol.for("b")] = "b";
obj3["c"] = "c";
obj3.d = "d";

for (const propertyKey in obj3) {
  console.log(propertyKey); // logs 'c' and 'd'
}

console.log(Object.getOwnPropertyNames(obj3)); //['c', 'd']
console.log(Object.getOwnPropertySymbols(obj3)); // [Symbol(a), Symbol(b)]

console.clear();

const sym = Symbol("foo");
const obj4 = {
  [sym]: "propertyValue1",
  propertyKey2: "propertyValue2",
};

console.log(JSON.stringify(obj4)); // {"propertyKey2":"propertyValue2"}
