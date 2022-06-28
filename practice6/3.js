// Arr-------------------------------------------------

const arr = [1, 2, 3];
// arr[Symbol.iterator] = null; TypeError: arr is not iterable
for (const a of arr) console.log(a);
// value 값을 리턴해 for문 내의 코드를 돌리다가 done이 true가 되면 for문을 빠져나온다!!

console.log(arr[Symbol.iterator]); // [Function: values]

// Set --------------------------------

const set = new Set([1, 2, 3]);
for (const a of set) console.log(a);

// Map --------------------------------

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const a of map) console.log(a);
// map의 keys, values, entries method는 iterator 반환
for (const a of map.keys()) console.log(a);
for (const a of map.values()) console.log(a);
for (const a of map.entries()) console.log(a);
// 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
const iterator = arr[Symbol.iterator]();

// 이터레이터 : {value, done} 객체를 리턴하는 next()를 가진 값
// { value deon }객체를 next로 불러( 리턴 )낼 수 있는 아이!

console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next()); // {value : 1, done : false}

// 이터러블/이터레이터 프로토콜 : 이터러블을 for.. of, 전개 연산자등과 함께 동작하도록한 규약
