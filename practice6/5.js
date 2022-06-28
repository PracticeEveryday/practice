// 전개 연산자

const a = [1, 2, 3];
// a[Symbol.iterator] = null; //TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
console.log(...a, ...[3, 4]);
