// let range = {
//   from: 1,
//   to: 5,
// };

// // for ( let num of range ) ... num = 1, 2, 3, 4, 5

// // 1. for .. of 최초 호출 시 , Symbol.iterator가 호출됨
// range[Symbol.iterator] = function () {
//   // Symbol.iterator는 이터레이터 객체를 반환
//   // 2. 이 후 for..of는 이터레이터 객체만을 동작하는데, 이 때 다음 값도 정해집니다.
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. for.. of 반복문에 의해 반복마다 next() 호출
//     next() {
//       // 4. next()는 값을 객체 {done:.. value :..} 형태로 반환
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// for (let num of range) {
//   console.log(num);
// } // 1, 2, 3, 4, 5

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   },
// };

// for (let num of range) {
//   console.log(num); // 1, then 2, 3, 4, 5
// }

for (let char of "test") {
  // 글자 하나당 한 번 실행됩니다(4회 호출).
  console.log(char); // t, e, s, t가 차례대로 출력됨
}

let str = "Hello";

// for..of를 사용한 것과 동일한 작업을 합니다.
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // 글자가 하나씩 출력됩니다.
}
console.log(str[Symbol.iterator]); // [Function: [Symbol.iterator]]

console.log(str.__proto__[Symbol.iterator]); // [Function: [Symbol.iterator]]
console.log(str.__proto__.constructor); //[Function: String]
console.log(String.prototype[Symbol.iterator]); // [Function: [Symbol.iterator]]

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

// for (let item of arrayLike) {
//   console.log(item);
// } // arrayLike is not iterable

let arr = Array.from(arrayLike);
console.log(arr.pop()); // world

const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
arr = Array.from(range);

console.log(arr); // [1, 2, 3, 4, 5]

arr = Array.from(range, (num) => num * num);
console.log(arr); // [1, 4, 9, 16, 25]
