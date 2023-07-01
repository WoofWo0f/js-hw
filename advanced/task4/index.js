let start = +prompt("Введите начальное число:");
let end = +prompt("Введите конечное число:");
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

alert(`
Введите начальное число: ${start}
Введите конечное число: ${end}
Сумма чисел: ${sum}
`);
