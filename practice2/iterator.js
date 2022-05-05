const log = console.log;
const iterable = {
  // 이터러블 값은 심볼 이터레이터 메서드를 구현하고 있어야함.
  [Symbol.iterator]() {
    let i = 3;
    // symbol.iterator는 이터레이터를 반환해야함.
    // symbol.iterator는 next()함수가 있으며 next함수는 value와 done을 가지고 있는 객체를 리턴해야함
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
    };
  },
};
let iter = iterable[Symbol.iterator]();
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
