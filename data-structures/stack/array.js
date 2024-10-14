class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const deleteItem = this.data[index];
    this.shiftItem(index);
    return deleteItem;
  }
  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push('a');
myArray.push('b');
myArray.push('c');
myArray.push('d');
// const item = myArray.pop();
const item = myArray.delete(0);
console.log(item);
console.log(myArray);
