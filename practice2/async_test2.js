let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log("bar", bar); // 1
});

bar = 1;
// bar 1

let bar2;

function someAsyncApiCall2(callback) {
  callback();
}

someAsyncApiCall2(() => {
  console.log("bar2", bar2); // 1
});

bar2 = 1;
// bar2 undefined
