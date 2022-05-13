const a = {
  b: "b",
  f: function () {
    console.log(this.b);
  },
};

a.f();

const o = { prop: 37 };

function b() {
  return this.prop;
}
o.f = b;
console.log(o.f()); // 37

o.b = { g: b, prop: 42 };
console.log(o.b.g()); // logs 42

d = 37;

let foo = () => {
  console.log(this === globalThis);
  console.log(this);
  return d;
};
console.log(foo() === globalThis);
console.log(foo());
console.clear();

// this를 반환하는 메소드 bar를 갖는 obj를 생성합니다.
// 반환된 함수는 화살표 함수로 생성되었으므로,
// this는 감싸진 함수의 this로 영구적으로 묶입니다.
// bar의 값은 호출에서 설정될 수 있으며, 이는 반환된 함수의 값을 설정하는 것입니다.
var obj = {
  bar: function () {
    var x = () => this;
    return x;
  },
};

// obj의 메소드로써 bar를 호출하고, this를 obj로 설정
// 반환된 함수로의 참조를 fn에 할당
var fn = obj.bar();
console.log(fn); //function : x
// this 설정 없이 fn을 호출하면,
// 기본값으로 global 객체 또는 엄격 모드에서는 undefined
console.log(fn() === obj); // true

// 호출 없이 obj의 메소드를 참조한다면 주의하세요.
var fn2 = obj.bar;
// 화살표 함수의 this를 bar 메소드 내부에서 호출하면
// fn2의 this를 따르므로 window를 반환할것입니다.
console.log(fn2()() == globalThis); // true
