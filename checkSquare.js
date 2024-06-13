// check square arr1[1,2,3,4] and arr2[1,9,4,16]

function checkSquare(arr1, arr2) {
  let map1 = {};
  let map2 = {};
  for (let item of arr1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  for (let item of arr2) {
    map2[item] = (map2[item] || 0) + 1;
  }
  for (let key in map1) {
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}
const res = checkSquare([1, 2, 3, 4, 5], [9, 1, 4, 25, 16]);

console.log(res);
