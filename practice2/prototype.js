var value = 1;

var obj = {
  value: 100,
  foo: function () {
    setTimeout(function () {
      console.log("callback's this: ", this); // ?
      console.log("callback's this.value: ", this.value); // ?
      function bar() {
        console.log("bar's this: ", this); // ?
      }
      bar();
    }, 1000);
  },
};

obj.foo();
