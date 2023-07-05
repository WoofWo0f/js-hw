let number = +prompt("Введите число:");
let minus = +prompt("Сколько отнять от вашего числа?");
let plus = +prompt("Сколько прибавить к предыдущему результату?");
let multiply = +prompt("На сколько умножить предыдущий результат?");
let divide = +prompt("На сколько разделить предыдущий результат?");

let result = ((number - minus + plus) * multiply) / divide;

alert(`((${number} - ${minus} + ${plus}) * ${multiply}) / ${divide} = ${result}`);
