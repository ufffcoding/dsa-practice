// find the given number using binary search from array

function binarySearch(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = (min + max) / 2;
    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const res = binarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);

console.log(res);
