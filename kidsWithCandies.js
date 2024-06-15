function kidsWithCandies(array, extra) {
  let highestCandies = 0;
  let booleanArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highestCandies) {
      highestCandies = array[i];
    }
  }
  console.log(highestCandies);
  for (let j = 0; j < array.length; j++) {
    if (array[j] + extra >= highestCandies) {
      booleanArr[booleanArr.length] = true;
    } else {
      booleanArr[booleanArr.length] = false;
    }
  }
  return booleanArr;
}

const res = kidsWithCandies([4, 2, 1, 1, 2], 1);

console.log(res);
