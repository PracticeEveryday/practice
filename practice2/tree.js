// Tree
// 무방향 그래프의 한 구조로 하나의 뿌리로부터 사방으로 뻗은 형태의 자료구조

// 계층적으로 표현되고 아래로만 뻗어나가 사이클이 없음

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    for (const childNode of this.children) {
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false;
  }
}

const tree = new Tree(100);
console.log(tree);

tree.insertNode(200);
console.log(tree);

tree.insertNode(300);
console.log(tree);

tree.insertNode(400);
console.log(tree);

tree.children[1].insertNode(250);
console.log(tree.children[1]);
