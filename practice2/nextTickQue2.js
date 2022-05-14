setTimeout(() => {
  console.log(1);
  process.nextTick(() => {
    console.log(3);
  });

  Promise.resolve().then(() => console.log(4));
}, 0);

setTimeout(() => {
  console.log(2);
}, 0);
