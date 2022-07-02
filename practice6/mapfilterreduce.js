const map = (f, iter) => {
  res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

const filter = (f, iter) => {
  res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const reduce = (f, prev, iter) => {
  if (!iter) {
    iter = prev[Symbol.iterator]();
    prev = iter.next().value;
  }
  for (const a of iter) {
    prev = f(prev, a);
  }
  return prev;
};

module.exports = { map, filter, reduce };
