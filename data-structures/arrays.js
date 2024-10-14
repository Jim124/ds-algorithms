const arr = ['a', 'b', 'c', 'd'];
arr.push('e'); // O(1)
arr.unshift('x'); // O(n)
arr.splice(2, 0, 'jim'); // O(n)
arr.pop(); // O(1)
console.log(arr);
