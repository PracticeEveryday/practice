const array = [1, 2, 3, 4];

const iterator = (() => {
  let num = 1;

  return {
    next: () => {
      return num > 4 ? { done: true } : { done: false, value: num++ };
    },
  };
})();

const arr2 = Array.from(iterator);
console.log(arr2); // [1, 2, 3, 4]

console.log(iterator.next()); // { done:false, value: 1 }
console.log(array); // [1, 2, 3, 4]
console.log(iterator.next()); // { done:false, value: 2 }

const arr3 = Array.from(iterator);
console.log(arr3); // [] 빈배열

console.log(iterator.next()); // { done:false, value: 3 }
console.log(iterator.next()); // { done:false, value: 4 }
console.log(iterator.next()); // { done:true }

console.log(iterator); // { next: [Function: next] }
const arr4 = Array.from(iterator);
console.log(arr4); // [] 빈배열
