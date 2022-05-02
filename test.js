const a = () => {
  this.test = "test";
  console.log(this);
};

console.log(this);

a();
const name = "lee";

obj = {
  name: "kim",
  help: function () {
    console.log(this.name);
  },
  help2: () => {
    console.log(this);
  },
};

obj.help(); // kim
obj.help2(); // undefined
