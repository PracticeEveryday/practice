const arr = [1, 2, 3];

const iter = arr[Symbol.iterator]();
const iter2 = iter[Symbol.iterator]();

console.log(iter === iter2);

iter2.next();
console.log(iter.next());
