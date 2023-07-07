const numArray = [6, 3, 9, 12, 56, 14, 1, 0, 3];

const calcSummArr = (arr) => {
  let sum = 0;
  for (let n = 0; n < arr.length; n++) {
    sum += arr[n];
  }
  console.log(sum);
};
calcSummArr(numArray);
