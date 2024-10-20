function firstRecurringItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
} // O(N^2) time complexity
const firstRecurring = firstRecurringItem([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(firstRecurring);

function firstRecurringItem2(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === arr[i]) {
      return arr[i];
    } else {
      map[arr[i]] = arr[i];
    }
  }
  return undefined;
} // O(N)  space complexity

const firstRecurringItem3 = firstRecurringItem2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
console.log(firstRecurringItem3);
