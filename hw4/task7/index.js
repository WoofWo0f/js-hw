const arr = ["a", "b", "c"];

const addToEnd = (arr, item) => {
  arr[arr.length] = item;
};

addToEnd(arr, "d");

console.log(arr);
