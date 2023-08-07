const createCounter = function () {
  let counter = 0;

  return function () {
    return ++counter;
  };
};

const counter = createCounter();

const makeAdder = function (num1) {
  return function (num2) {
    return num1 + num2;
  };
};

const add5 = makeAdder(5);

const multiplier = function (X) {
  return function (Y) {
    return X * Y;
  };
};

const multiplyBy2 = multiplier(2);

console.log(counter());
console.log(counter());
console.log(counter());

console.log(add5(5));
console.log(add5(120));

console.log(multiplyBy2(6));
console.log(multiplyBy2(20));
