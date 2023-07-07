const randomNumbers = [
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
];

let randomNumbersCubed = [];

for (num of randomNumbers) {
  randomNumbersCubed.push(num ** 3);
}

console.log(randomNumbers);
console.log(randomNumbersCubed);
