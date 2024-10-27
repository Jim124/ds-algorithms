class Queue {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[0];
  }
  push(value) {
    return this.data.push(value);
  }
  pop() {
    return this.data.shift();
  }
}
const myQueue = new Queue();
myQueue.push('google');
myQueue.push('udemy');
myQueue.push('discord');
myQueue.pop();
console.log(myQueue);
