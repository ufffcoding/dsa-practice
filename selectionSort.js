function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
        console.log(min);
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}

const res = selectionSort([3, 4, 5, 2, 1, 6, 8, 7]);

console.log(res);
