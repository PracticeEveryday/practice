var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log(this, v, i);
  },
};

obj.logValues();

//[4, 5, 6].forEach(obj.logValues);

setTimeout(function () {
  console.log(this);
}, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this);
});

obj = {
  name: "obj",
  func: function () {
    var self = this;
    return function () {
      console.log(self.name);
    };
  },
};

var callback = obj.func();

setTimeout(callback, 1000); // obj1 > this는 obj!! 가 나온다.
