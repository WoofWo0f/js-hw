const getSum = function (N) {
  if (N === 1) {
    return 1;
  } else {
    return N + getSum(N - 1);
  }
};

const getFactorial = function (N) {
  if (N === 0) {
    return 1;
  } else {
    return N * getFactorial(N - 1);
  }
};

console.log(getSum(5));
console.log(getFactorial(5));
