let global;

function sum(a) {
  return a + global;
}

console.log(sum(global)); // ?

function foo() {
  console.log("foo");
}

var someFoo = foo;
var obj = {
  someFoo: foo,
};

foo(); // foo
someFoo(); //foo
obj.someFoo(); // foos

console.log(foo === obj.someFoo); // true
console.log(foo === someFoo); // true
console.log(someFoo === obj.someFoo); // true

var myObject = {
  foo: function () {
    console.log("foo");
  },
};

var someFoo = myObject.foo;

someFoo(); // function foo(){..}
myObject.foo(); // function foo() {..}
