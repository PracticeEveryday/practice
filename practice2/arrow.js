function name() {
  this.name = "kim";
  return {
    name: "lee",
    speak: function () {
      console.log(this.name);
    },
  };
}

function arrName() {
  this.name = "kim";
  return {
    name: "park",
    speak: () => {
      console.log(this.name);
    },
  };
}

const func = new name();
func.speak(); // lee

const arrFunc = new arrName();
arrFunc.speak(); // kim

function fun() {
  this.num = 1234;
}
console.log(fun.prototype); // {}
console.log(fun.__proto__);
const arrFun = () => {
  return 1234;
};
console.log(arrFun.prototype); // undefined
console.log(arrFun.__proto__); // {}

const a = new fun();
console.log(a.num);

// const b = new arrFun();
// console.log(b.num); error : TypeError: arrFun is not a constructor

function checkArgs() {
  // arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체입니다.
  console.log(arguments.callee); // Function: checkArgs
  console.log(arguments.length); // 4
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}

checkArgs(1, 2, 3, 4);

const checkArrArgs = () => {
  console.log(arguments.callee);
  console.log(arguments.length);
  console.log(arguments);
};

checkArrArgs();
