class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
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
}

const myDoubleLinkedList = new DoublyLinkedList(10);
myDoubleLinkedList.append(5);
myDoubleLinkedList.append(10);
myDoubleLinkedList.prepend(1);
myDoubleLinkedList.insert(2, 99);
let arr = myDoubleLinkedList.printList();
console.log(arr);
