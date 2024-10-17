function mergeSortedArrays(arr1, arr2) {
  const mergeArray = [...arr1, ...arr2];
  mergeArray.sort((a, b) => a - b);
  return mergeArray;
}

const array = mergeSortedArrays([0, 3, 4, 31], [4, 6, 40]);
console.log(array);

function mergeSortedArray2(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;
  const mergeArray = [];
  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return mergeArray;
}

const mergeArray2 = mergeSortedArray2([0, 3, 4, 31], [4, 6, 40]);
console.log(mergeArray2);
