var a, b;
({ a, b } = { a: 1, b: 2 });
console.log(a, b);

var o = { p: 42, q: true };
var { p: foo, q: bar } = o;
console.log(foo); // 42
console.log(bar); // true

var { a = 10, b = 5 } = { a: 3 };
console.log(a, b); // 3, 5

var { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa, bb); // 3 5

function drawES5(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? "big" : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;

  console.log(size, cords, radius);
}

drawES5({
  cords: { x: 18, y: 30 },
  radius: 30,
}); // big { x: 18, y: 30 } 30
drawES5({});
// big { x: 0, y: 0 } 25
drawES5();
// big { x: 0, y: 0 } 25

function drawES2015({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, cords, radius);
}
drawES2015({ cords: { x: 18, y: 30 }, radius: 30 });
// big { x: 18, y: 30 } 30
drawES2015({});
// big { x: 0, y: 0 } 25
drawES2015();
// big { x: 0, y: 0 } 25

function drawES20152({ size = "big", cords = { x: 0, y: 0 }, radius = 25 }) {
  console.log(size, cords, radius);
}
drawES20152({ cords: { x: 18, y: 30 }, radius: 30 });
// big { x: 18, y: 30 } 30
drawES20152({});
// big { x: 0, y: 0 } 25
// drawES20152();
// TypeError: Cannot read properties of undefined (reading 'size')
drawES20152({ cords: { x: 18, y: 30 } });
// big { x: 18, y: 30 } 25
