function canPlaceFlowers(array, n) {
  for (let i = 0; i < array.length; i++) {
    let left = i === 0 || array[i - 1] === 0;
    let right = i === array.length - 1 || array[i + 1] === 0;
    if (left && right && array[i] === 0) {
      array[i] = 1;
      n -= 1;
    }
  }
  return n <= 0;
}

const res = canPlaceFlowers([0, 0, 1, 0, 0], 2);
console.log(res);
