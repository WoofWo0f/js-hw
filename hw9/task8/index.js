const getPromise = function () {
  return new Promise((resolve) => {
    resolve("Hello");
  });
};

getPromise()
  .then((result) => {
    return result + " World";
  })
  .then((result) => {
    return result + "!";
  })
  .then((result) => {
    console.log(result);
  });

const sumArray = function (arr) {
  return new Promise((resolve) => {
    const sum = arr.reduce((accum, num) => accum + num, 0);
    resolve(sum);
  });
};

const numbers = [8, 15, -6, 23, 1];
sumArray(numbers).then((result) => {
  console.log(result);
});
