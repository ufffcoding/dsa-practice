function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
    console.log(array);
  }
  return array;
}

console.log(insertionSort([2, 1, 4, 9, 3, 5, 6, 8]));
