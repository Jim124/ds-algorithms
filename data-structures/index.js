const memo = ['memo'];
const large = new Array(100000).fill('memo');
function findMemo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'memo') {
      console.log('this is  correct');
    }
  }
}
// x.findMemo(large);

const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['h', 'r', 'g', 'a'];

// O(n^2) bad solution
function getCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

const result = getCommonItems(arr1, arr2);
console.log(result);

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    const item = arr2[j];
    if (map[item]) return true;
  }
  return false;
}

const isCommon = containsCommonItem2(arr1, arr2);
const isCommon2 = arr1.some((item) => arr2.includes(item));
console.log(isCommon);
console.log(isCommon2);
