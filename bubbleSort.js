// sort array using bubble sort

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    let isSwapped;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return array; // it should be after the func complete
}

const res = bubbleSort([3, 2, 1, 6, 7, 9, 8, 4, 5]);
console.log(res);
