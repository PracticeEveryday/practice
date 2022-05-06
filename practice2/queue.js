class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(...data) {
    this.data.push(...data);
  }

  dequeue() {
    if (this.size === 0) {
      return;
    } else {
      this.data.shift() || null;
    }
  }

  size() {
    return this.data.length;
  }
}

const queue = new Queue();
console.log(queue);
queue.enqueue(1);
console.log(queue);
queue.enqueue(2, 3);
console.log(queue);
queue.enqueue(4);
console.log(queue);

queue.dequeue();
console.log(queue);
