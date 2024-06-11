function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  const gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}

const res = gcdOfStrings("ABCABC", "ABCABCABC");
console.log(res);
