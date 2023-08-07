const showGreeting = function (value) {
  return new Promise((resolve, reject) => {
    if (typeof value === "boolean") {
      if (value) {
        resolve("Hello");
      } else {
        reject("Goodbye");
      }
    } else {
      reject("Invalid input");
    }
  });
};

showGreeting(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

showGreeting(false)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

showGreeting("invalid")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

//----------------------------------------------------

// const checkNumber = function (number) {
//   return new Promise((resolve, reject) => {
//     switch (true) {
//       case number > 10:
//         resolve(`${number} is more than 10`);
//         break;
//       case number === 10:
//         reject(`${number} is equal 10`);
//         break;
//       case number < 10:
//         reject(`${number} is less than 10`);
//         break;
//       default:
//         reject(`It's not a number!`);
//     }
//   });
// };

// let num = +prompt("Enter your number");
// checkNumber(num)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
