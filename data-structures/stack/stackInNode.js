class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingNode = this.top;
      newNode.next = holdingNode;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.bottom == this.top) {
      this.bottom = null;
    }
    const holdingNode = this.top;
    this.top = holdingNode.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Amazon');
console.log(myStack);
myStack.pop();
console.log(myStack);
