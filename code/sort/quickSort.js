const quickSort = (arr) => {
  let pivot = arr[0];
  while (!arr === arr.sort(function(a, b) { return a > b ? 1 : -1})) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        arr.shift(arr[i]);
        arr.splice(i, 1);
      } else {
        arr.push(arr[i]);
        arr.splice(i, 1);
      }
    }
    quickSort(arr);
  }
  return arr;
};

const test = [10, -5, 32, 5, -11, 24, 3];
console.log(quickSort(test));
