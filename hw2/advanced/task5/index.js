let number = +prompt("Введите число:");
let output = "";

for (let i = 1; i <= 10; i++) {
  let result = number * i;
  output += number + " * " + i + " = " + result + "\n";
}
console.log(`
Введите число: ${number}
Таблица умножения для числа ${number}:
${output}`);

alert(`
Введите число: ${number}
Таблица умножения для числа ${number}:
${output}`);
