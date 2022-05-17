const obj2 = {
  foo: function () {
    console.log("foo this", this);
    function bar() {
      console.log("bar this", this);
      console.log(this.a);
    }
    bar();
  },
};
global.a = 1;
function bar() {
  console.log("bar this", this);
  console.log(this.a);
}
bar();
obj2.foo();
console.log(bar.this === obj2.foo.this);
console.log(obj2.foo.this); // undefined 함수가 호출될 때 this 가 바인딩 된다!!
console.log(bar);
