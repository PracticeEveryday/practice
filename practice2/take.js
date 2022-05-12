const log = console.log;

const range = (l) => {
  let res = [];
  let i = -1;
  while (++i < l) {
    res.push(i);
  }
  return res;
};

// log(range(100));

Lrange = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

const take = (l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === l) return res;
  }
  return re;
};

console.time(" ");
log(take(5, range(100000))); // 100000를 만들고 5개 뽑는데
console.timeEnd(" ");
// lrange처럼 지연성을 가지는 값을 이터레이터로 만들게 되더라도 다 사용가능!!
console.time(" ");
log(take(5, Lrange(100))); // 얘는 최대 100000를 만들껀데!! 5개만 줘 이기에 더 빠름
//so Infinity 무한 수열을 만들어 도 됨!!! 어짜피 5개만 만드니까
log(take(5, Lrange(Infinity)));
console.timeEnd(" ");
// 효율이 좋음!
