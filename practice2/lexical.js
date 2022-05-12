let num = 1;

function a() {
  let num = 10;
  b();
}

function b() {
  let num = 10;
  function d() {
    console.log(num);
  }
  c();
  d(); // 10
}

function c() {
  console.log(num);
}

a(); // 1
b(); // 1
c(); // 1
