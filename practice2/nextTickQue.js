Promise.resolve().then(() => console.log("resolve"));
process.nextTick(() => console.log("nextTick"));

// nextTick
// resolve

const fn = () => {
  process.nextTick(fn);
};

setTimeout(() => {
  console.log("Timer");
}, 0);

fn();
// 영원히 Timer는 출력 되지 않는다.
