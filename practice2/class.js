class test {
  func = (test) => {
    console.log(test);
  };

  static func2 = (test) => {
    // 정적 메서드
    console.log(test);
  };
}
test.func2(1);
// test.func(1); // error

const test123 = new test();
test123.func(2);
