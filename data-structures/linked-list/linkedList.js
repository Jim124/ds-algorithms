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
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  preAppend(value) {
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    let currentValue = this.head;
    const arr = [];
    while (currentValue !== null) {
      const value = currentValue.value;
      arr.push(value);
      currentValue = currentValue.next;
    }
    return arr;
  }

  insert(index, value) {
    if (index === 0) {
      this.preAppend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingNext = leader.next;
    leader.next = newNode;
    newNode.next = holdingNext;
    this.length++;
    return this.printList();
  }
  remove(index) {
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

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.preAppend(1);

console.log(myLinkedList);
console.log(myLinkedList.head);
let arr = myLinkedList.printList();
console.log(arr);
arr = myLinkedList.insert(2, 99);
console.log(arr);
arr = myLinkedList.remove(2);
console.log(arr);
