const kim = {
  name: "kim",
};

const lee = {
  name: "lee",
};

function Name() {
  console.log(this.name);
}

Name(); // undefined => windew를 가리키기 때문

// call : call 메서드는 모든 함수에서 사용할 수 있으며 this를 특정 값으로 지정할 수 있다.
Name.call(kim); // kim
Name.call(lee);
// call(this로 사용할 값, 함수가 사용될 매개변수를 순서대로 적은것!!)

function update(bitrhYear, job) {
  this.bitrhYear = bitrhYear;
  this.job = job;
}
update.call(kim, 1995, "Student");
console.log(kim); //{ name: 'kim', bitrhYear: 1995, job: 'Student' }

// apply : apply는 매개변수를 처리하는 방법을 제외하면 call과 완전히 같다
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수를 배열로 받는다.

update.apply(lee, [1995, "Student"]);
console.log(lee); //{ name: 'lee', bitrhYear: 1995, job: 'Student' }

const nums = [1, 4, 76, 22, 0];
const minNum = Math.min.apply(null, nums);
// Math.min(...nums)  Math.min(nums) error
const maxNum = Math.max.apply(null, nums);
// Math.max(...nums)  Math.max(nums) error
console.log(minNum, maxNum);

// bind : 함수의 this 값을 영구히 바꿀 수있다.

const updateKim = update.bind(kim);
updateKim(1995, "Student");
console.log(kim);

const user = {
  name: "Kim",
  showName: function () {
    console.log(`hello ${this.name}`);
  },
};

user.showName(); // hello kim
let fn = user.showName;
fn(); // hello undefined
fn.call(user); // hello kim
fn.bind(user); // hello kim

const bindFn = fn.bind(user);
bindFn(); // hello kim
