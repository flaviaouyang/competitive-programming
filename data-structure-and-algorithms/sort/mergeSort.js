const merge = (arr1, arr2) => {
  let merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }
  return [...merged, ...arr1, ...arr2];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    let listA = arr.splice(0, arr.length/2);
    return merge(mergeSort(listA), mergeSort(arr));
  }
};

const test = [-4, 10, 3, 21, 5, 26, -11];
console.log(mergeSort(test));