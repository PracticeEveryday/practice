class Stack {
  constructor() {
    this.data = [];
  }

  push(...data) {
    this.data.push(...data);
  }

  pop() {
    if (this.size === 0) {
      return;
    } else {
      this.data.pop();
    }
  }

  size() {
    return this.data.length;
  }
}
const stack = new Stack();
stack.push(10);
console.log(stack);
stack.push(20);
console.log(stack);
stack.push(30);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log(stack);
