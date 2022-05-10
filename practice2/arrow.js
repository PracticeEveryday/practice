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
