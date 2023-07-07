const numbers = [27, -3, 92, 0, -17, -2, 108];

//1st way
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     console.log(numbers[i] + " > 0");
//   } else if (numbers[i] < 0) {
//     console.log(numbers[i] + " < 0");
//   } else {
//     console.log(numbers[i] + " = 0");
//   }
// }

//2nd way
for (const i of numbers) {
  switch (true) {
    case i > 0:
      console.log(i + " > 0");
      break;
    case i < 0:
      console.log(i + " < 0");
      break;
    default:
      console.log(i + " = 0");
  }
}
