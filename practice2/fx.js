const curry =
  (
    f // 함수를 받아서
  ) =>
  (
    a,
    ..._ // 함수를 리턴하는데
  ) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);
// 그렇게 리턴된 함수가 실행될 떄 인자가 두개 이상이라면 받아둔 함수를 즉시실행하고 인자가 두개보다 작다면 함수를 다시 리턴한 후에 그 이후에 받은 인자들을 합쳐서 실행하는 함수

map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

// map, filter, reduce에 인자가 하나만 들어오면 이 후 인자들을 더 받기로 기다리는 함수를 리턴하도록 되어있음

module.exports = { map, filter, reduce };
