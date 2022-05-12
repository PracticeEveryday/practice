const { map, filter, reduce } = require("./fx.js");

const log = console.log;

const add = (a, b) => a + b;

const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    log(i, "range");
    yield i;
  }
};

let list = L.range(4);
log(list); // Object [Generator] {}
//log(reduce(add, list)); // reduce가 iterable을 받기에 이터레이터로 만들고 결과값 반환!
// 필요할 때까지 기다렸다가 배열을 만들고 동작을 한다!!

a = [1, 2, 3];
// 이렇게 만들어 졌을 때 a를 활용하기 전에는 a 자체가 [1, 2, 3] 이렇게 평가되어 있을 필요가 없다!

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

test("L.range", 10, () => {
  reduce((add, L.range(10000000)));
});
