function first() {
  second();
  console.log("1");
}
function second() {
  third();
  console.log("2");
}
function third() {
  console.log("3");
}
first();

// 3
// 2
// 1

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  let squared = square(n);
  console.log(squared);
}

printSquare(4);

// 1. 실행
console.log("script start");

// 2. task queue로 전달
setTimeout(function () {
  // 8. task 실행
  console.log("setTimeout");
}, 0);

// 3. microtask queue로 전달
Promise.resolve()
  .then(function () {
    // 5. microtask 실행
    console.log("promise1");
    // 6. microtask queue로 전달
  })
  .then(function () {
    // 7. microtask 실행
    console.log("promise2");
  });

// 4. 실행

function promise() {
  console.log("script end");

  console.log("Start");

  setTimeout(() => {
    console.log("Timeout!");
  }, 0);

  Promise.resolve("Promise!").then((res) => console.log(res));

  console.log("END");
}

//promise();
/**
script end
Start
END
Promise!
Timeout!
 */
