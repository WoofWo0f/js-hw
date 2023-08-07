const colorsSet = new Set(["red", "green", "blue"]);

const hasColor = function (color) {
  return colorsSet.has(color);
};

const addColor = function (color) {
  colorsSet.add(color);
};

const removeColor = function (color) {
  colorsSet.delete(color);
};

console.log(hasColor("red"));

addColor("yellow");
console.log(colorsSet);

removeColor("green");
console.log(colorsSet);
