const log = console.log;

class Heap {
  constructor() {
    this.heap = [null];
  }
  size() {
    // 0번재 인덱스 안씀
    return this.heap.length - 1;
  }

  getMin() {
    // 1번재 있으면 주고 없으면 주지마
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = currentIndex / 2;

    while (
      currentIndex > 1 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = currentIndex / 2;
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    // 배열 마지막 원소를 root 위치에 먼저 배치하는 과정이다.

    let currentIndex = 1;
    let leftIndex = currentIndex * 2;
    let rightIndex = currentIndex * 2 + 1;

    if (!this.heap[leftIndex]) return min;
    if (!this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[currentIndex]) {
        this.swap(leftIndex, currentIndex);
      }
      return min;
    }

    while (
      this.heap[leftIndex] < this.heap[currentIndex] ||
      this.heap[rightIndex] < this.heap[currentIndex]
    ) {
      const minIdx =
        this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
      this.swap(minIdx, currentIndex);
      currentIndex = minIdx;
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return min;
  }
}

const minHeap = new Heap();
log(minHeap);
minHeap.push(1);
log(minHeap);
minHeap.push(2);
log(minHeap);
minHeap.push(3);
log(minHeap);
minHeap.push(4);
log(minHeap);
minHeap.push(5);
log(minHeap);

minHeap.pop();
log(minHeap);
minHeap.pop();
log(minHeap);
minHeap.pop();
log(minHeap);
minHeap.pop();
log(minHeap);
