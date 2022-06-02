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

let range = {
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

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

for 