// find sum zero
// [-5,-3,-2,-1,0,2,3,6] --> input
// [?,?] --> output

function findSumZero(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
  }
}

// findSumZero([-5, -3, -2, -1, 0, 2, 3, 6]);

// 0(n^2) quadratic time complexity

// improved version

function findSumPair(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    console.log("outer");
    if (sum === 0) {
      return [array[left], array[right]];
      console.log("inner");
    } else if (0 < sum) {
      right--;
    } else {
      left++;
    }
  }
}

const res = findSumPair([-5, -3, -2, 1, 0, 2, 3, 6]);

console.log(res);
