//[1,2,3,4,3,5,4,6,7,8] => Total elements - 10
//Count largest sum of consecutive Digits
//num = 4
//sum => 25

//conditions
//if array is greater than sum throw error

function largestSum(array, num) {
  if (num > array) {
    throw new Error("num is greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let tmp = 0;
      for (let j = 0; j < num; j++) {
        tmp += array[i + j];
      }
      if (tmp > max) {
        max = tmp;
      }
    }
    return max;
  }
}

const res = largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(res);
