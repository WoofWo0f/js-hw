const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

let sum = 0;
let quantity = 0;

for (let line = 0; line < matrix.length; line++) {
  for (let num = 0; num < matrix[line].length; num++) {
    sum += matrix[line][num];
    quantity++;
  }
}

const result = sum / quantity;

console.log(result);
