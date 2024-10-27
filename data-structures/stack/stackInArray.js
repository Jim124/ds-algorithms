class Stack {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
}
const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);
