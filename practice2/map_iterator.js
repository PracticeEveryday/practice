const log = console.log;

const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

let m = new Map();
m.set("a", 10);
m.set("b", 20);

const it = m[Symbol.iterator]();
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(map(([k, a]) => [k, a * 2], m));
log(new Map(map(([k, a]) => [k, a * 2], m)));
