const node1 = {
  data: 100,
};

const node2 = {
  data: 200,
};

node1.next = node2;
// node1의 next에는 node2를 참조하고 있다 (주소값 존재)

console.log(node1); // { data: 100, next: { data: 200 } }

class Node {
  constructor(data, next = null) {
    // data와 next를 넣고 next의 디폴트는 null로 지정
    // linkedlist의 tail(마지막은) null로 끝나기때문
    this.data = data;
    this.next = next;
    // node에는 data값과 다음 값의 주소가 들어 있다.
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // head는 null!! node의 마지막은 null로 끝나니까!!
    this.size = 0;
    // size는 배열의 크기를 구하기 위함임
  }

  // node 삽입
  append(data) {
    if (this.size === 0) {
      // LinkedList가 비어있으면
      let newNode = new Node(data); // node 만들고
      this.head = newNode; // head(첫번째는) 날 바라보고
      this.size++; // size 한개 업!
    } else {
      // LinkedList가 비어있지 않으면
      let newNode = new Node(data); // node 만들고
      let current = this.head; // 지금의 헤드를 current에 담고
      while (current.next !== null) {
        // head가 null 전까지 찾아가라
        current = current.next;
      }
      current.next = newNode; // 그리고 지금 node next에 만든 노드를 넣어줘라
      this.size++; // size한개 키우고!
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList); // {head: null, size : 0}
linkedList.append(200);
console.log(linkedList); // {hea}
