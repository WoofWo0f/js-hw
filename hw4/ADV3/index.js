const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let positiveNumbers = [];
let negativeNumbers = [];

for (num of mixedNumbers) {
  if (num >= 0) {
    positiveNumbers.push(num);
  } else {
    negativeNumbers.push(num);
  }
}

console.log(positiveNumbers);
console.log(negativeNumbers);
