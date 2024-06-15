// find odd numbers from the array.

function findOdd(array) {
  let oddArr = [];
  function helperRecursion(inputArray) {
    if (inputArray.length === 0) {
      return;
    }
    if (inputArray[0] % 2 !== 0) {
      oddArr.push(inputArray[0]);
    }
    helperRecursion(inputArray.slice(1));
  }
  helperRecursion(array);
  return oddArr;
}

const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);
