function mergeAlternately(str1, str2) {
  let merge = [];
  for (let i = 0; i < str1.length + str2.length; i++) {
    merge.push(str1[i]);
    merge.push(str2[i]);
  }
  return merge.join("");
}

const res = mergeAlternately("abc", "pqr");
console.log(res);
