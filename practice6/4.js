const iterable = {
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          i++;
          return { value: i, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
// iterable에 Symbol.iterator가 있기에 for of문 가능
for (const a of iterable) {
  console.log(a);
}
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
