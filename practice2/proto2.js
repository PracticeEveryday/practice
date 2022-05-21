const instance = new Array(1, 2);

console.log(instance);

console.log(instance.__proto__);
console.log(instance.__proto__ === Array.prototype);
console.log(Array === instance.constructor);
console.log(instance.__proto__.constructor === Array);

console.clear();

console.log(Array === Array.prototype.constructor);
console.log(Array.__proto__.constructor === Array.prototype);
console.log(Array.__proto__.__proto__);
console.log(Array.prototype.constructor === Array.constructor);
console.log(Array.constructor);
console.log(Array.constructor === Function);
console.log(Array.__proto__.constructor === Function);
console.log(Array.__proto__ === Function.prototype);
console.log(Function);
console.log(Function.prototype);
console.log(Array === Function);
