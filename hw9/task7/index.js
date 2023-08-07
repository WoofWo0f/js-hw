const delayPromise = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Five seconds have passed");
    }, 5000);
  });
};

delayPromise().then((result) => {
  console.log(result);
});

const checkNumber = function (number) {
  return new Promise((resolve, reject) => {
    switch (true) {
      case number > 10:
        resolve(`${number} is more than 10`);
        break;
      case number === 10:
        reject(`${number} is equal 10`);
        break;
      case number < 10:
        reject(`${number} is less than 10`);
        break;
      default:
        reject(`It's not a number!`);
    }
  });
};

let num = +prompt("Enter your number");
checkNumber(num)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
