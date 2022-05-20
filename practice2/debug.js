var x = 3;

function outer() {
  var x = 2;
  function inner() {
    debugger;
    var x = 1;
    console.log(x);
  }
  inner();
  console.log(x);
}
console.log(x);
