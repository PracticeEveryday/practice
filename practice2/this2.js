function a() {
  console.log(this === globalThis);
  function b() {
    console.log(this === globalThis);
    const c = () => {
      console.log(this === globalThis);
    };
    c();
  }
  b();
}

a();

const obj = {
  a: function () {
    console.log(this);
    const b = () => {
      console.log(this);
    };
    b();
    function c() {
      console.log(this);
    }
    c();
    const d = function () {
      console.log(this);
    };
    d();
  },
};

obj.a();
