// 기존과 달라진 ES6에서의 리스트 순회

// iterable 반복 가능한
// iterator 반복자

const list = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
  // 숫자 키로 순회
  console.log(list[i]);
}

const str = "abc";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 간결하게 만드는 것 이상의 의미를 가짐
for (const a of list) {
  console.log(a);
}

for (const a of str) {
  console.log(a);
}

// Array를 통해 알아보기
console.log("Arr----------");
const arr = [1, 2, 3];
let iter1 = arr[Symbol.iterator]();

// value 에 담아있는 값을 반환하다 true 가 되면 for문 빠져나옴
for (const k of iter1) {
  console.log(k);
}
// Symbol.iterator라는 함수를 가지고 있음!!
console.log(arr[Symbol.iterator]); // [Function: values]
// array Iterator라는 함수가 return 됨 // [Array Iterator] {}
console.log(arr[Symbol.iterator]());
let iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // {value : 1 , done: flase}

// 이러면 2부터 돔!!
for (const a of iterator) {
  console.log(a);
}
console.log(iterator.next()); // {value : 2 , done: flase}
console.log(iterator.next()); // {value : 3 , done: flase}
console.log(iterator.next()); // {value : undefined , done: true}

// set을 통해 알아보기
console.log("Set -----------");
const set = new Set([1, 2, 3]);
//console.log(set[0]); error
//console.log(set[1]); error
//console.log(set[2]); error
// 숫자로 접근할 수 있는 값이 없음에도 for of 문으로 도는 까닭은 interator이기 때문이다.
for (const a of set) console.log(a);

// Map을 통해 알아보기

console.log("Map -----------");
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const a of map.keys()) console.log(a);
for (const a of map.values()) console.log(a);
for (const a of map.entries()) console.log(a);

let iter2 = map[Symbol.iterator]();
iter2.next();

// keys만 두번 순회
for (const a of iter2) console.log(a);

/*
 이터러블 : 이터레이터를 리턴하는 [Symbol.iteraor]()를 가진 값
 이터레이터 : {value, done} 객체를 리턴하는 next()를 가진 값
 이터러블/ 이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께
 동작하도록 한 규약
*/

const map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

//keys, values, entries는 이터레이터를 return를 해줌
let keys = map2.keys();
console.log(keys.next());
