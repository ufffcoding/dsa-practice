// sort [2,1,4,3]

let arr = [2, 1, 4, 3, 5, 6, 9, 10, 13];
let newArr = [];
let i = 0;
let j = 1;

function isSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function sort(array) {
  if (isSort(array)) {
    newArr = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sort(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sort(array);
  }
}

sort(arr);
console.log(newArr);
