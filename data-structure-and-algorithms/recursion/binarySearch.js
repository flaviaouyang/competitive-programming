const binarySearch = (arr, key) => {
  let midIndex = Math.floor((arr.length - 1) / 2);
  let mid = arr[midIndex];
  if (key === mid) {
    return "Found";
  } else if (key < mid && arr.length > 0) {
    return binarySearch(arr.slice(0, midIndex), key);
  } else if (key > mid && arr.length > 0) {
    return binarySearch(arr.slice(midIndex + 1, arr.length), key);
  } else {
    return "Not Found";
  }
};

const test = [-4, 1, 5, 6, 14, 23, 31, 52, 76];
let key = 100;
console.log(binarySearch(test, key));
