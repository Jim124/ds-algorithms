class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  preAppend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      const value = currentNode.value;
      arr.push(value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, value) {
    if (index === 0) {
      return this.preAppend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const currentNode = this.traverseToIndex(index - 1);
    const holdingNext = currentNode.next;
    newNode.next = holdingNext;
    currentNode.next = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const deleteNode = leader.next;
    leader.next = deleteNode.next;
    this.length--;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.preAppend(1);
console.log(myLinkedList);
let arr = myLinkedList.printList();
console.log(arr);
arr = myLinkedList.insert(2, 99);
console.log(arr);
arr = myLinkedList.remove(2);
console.log(arr);

let obj = { value: true };
let obj1 = obj;
obj1.test = 1;
obj1 = {};
console.log(obj);
