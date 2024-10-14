function reverseStr(str) {
  const arr = str.split('');
  const reverseArr = arr.reverse();
  const reverseStr = reverseArr.join('');
  return reverseStr;
}

function reverseStr2(str) {
  const reverseArray = [];
  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    reverseArray.push(str[i]);
  }
  return reverseArray.join('');
}

const result = reverseStr('Hi my name is Jim');
const result2 = reverseStr2('Hi my name is Jim');
console.log(result);
console.log(result2);

const array1 = [1, 2];
const [a, b] = array1;
console.log(a, b);
