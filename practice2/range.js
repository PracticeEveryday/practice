const { map, filter, reduce } = require("./fx.js");

const log = console.log;

const add = (a, b) => a + b;

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};

//log(range(5));
// 이터레이터로 만들고 순회를 한다!
//[0, 1, 2, 3, 4] 이미 배열로 평가 모든 코드가 벌써 평가가 되어 있음.

//log(range(2));
// [0, 1]

let list = range(4);
//log(list);
//log(reduce(add, list));

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

test("range", 10, () => {
  reduce((add, range(10000000)));
});
