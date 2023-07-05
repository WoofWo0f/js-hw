let start = +prompt("Введите начальное число:");
let end = +prompt("Введите конечное число:");
let result = "";

while (start <= end) {
  result += start + " ";
  start++;
}

alert(`
Введите начальное число: ${start}
Введите конечное число: ${end}
Результат: ${result}
`);
