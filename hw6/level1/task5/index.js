// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
const greet = (name) => {
  return "Hello " + name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1) + "!";
};

console.log(greet("sadsdds"));
