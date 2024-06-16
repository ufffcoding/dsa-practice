// make includes function from scratch

let data = [
  {
    username: "deepanshu",
    surname: "verma",
  },
  {
    username: "sanyam",
    surname: "verma",
  },
  {
    username: "sanjay",
    surname: "verma",
  },
];

function includes(array, value) {
  for (let item of array) {
    if (item["username"] === value) {
      return true;
    }
    return false;
  }
}

const res = includes(data, "deepanshu");
console.log(res);
