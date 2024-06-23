function reverseWords(s) {
  return s
    .split(" ")
    .slice()
    .filter((i) => i !== "")
    .reverse()
    .join(" ");
}

const res = reverseWords("hey there  am good");
console.log(res);
