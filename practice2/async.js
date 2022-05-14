const now = Date.now();
const fn = function () {
  const now2 = Date.now();
  console.log(now2 - now);
};

const A = setTimeout(fn, 50); // 62
const B = setTimeout(fn, 150); // 152
const C = setTimeout(fn, 200); // 213
const D = setTimeout(fn, 500); // 500
const E = setTimeout(fn, 3000); // 3014
