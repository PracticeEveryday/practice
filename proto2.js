// Object.create 함수는 ES5부터 지원하는 함수이며, 인자로 전달된 객체를 원형으로 하는 새로운 객체를 생성하는 기능을 한다.

var foo = {
  init: (who) => {
    this.me = who;
  },
  identify: () => {
    return "I am " + this.me;
  },
};

var bar = Object.create(foo);

// error this.identify() is not a function
bar.speak = () => {
  return "Hello," + this.identify();
};

const baz = Object.create(bar);

baz.init("baz");
console.log(baz.speak()); // Hello, I am undefined
