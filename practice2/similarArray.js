// 유사 배열
// const similarArray = {
//   0: "zero",
//   1: "one",
//   2: "two",
//   length: 3,
// };

//console.log(similarArray);
// { '0': 'zero', '1': 'one', '2': 'two', '3': 'three', length: 3 }
//console.log(similarArray.length);
// 3

// 배열
const arr = [1, 2, 3];

console.log(arr);
// [1, 2, 3]
console.log(arr.length);
// 3

// 유사 배열
const similarArray = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

console.log(similarArray.__proto__ === Object.prototype);
// true

arr2 = Array.from(similarArray);
console.log(arr2);
console.log(arr2.__proto__ === Array.prototype);
// true

arr2.forEach((item) => console.log(item * 2)); //2, 4, 6
