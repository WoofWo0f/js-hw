let lastName = prompt("Введите вашу фамилию:");
let firstName = prompt("Введите ваше имя:");
let surName = prompt("Введите ваше отчество:");
let age = parseInt(prompt("Введите ваш возраст в годах:"));
let isMale = confirm("Ваш пол - мужской?");
let ageInDays = age * 365;
let futureAge = age + 5;
let isRetired = (isMale && age >= 65) || (!isMale && age >= 55);
alert(
  "Ваше ФИО: " +
    lastName +
    " " +
    firstName +
    " " +
    surName +
    "\nВаш возраст в годах: " +
    age +
    "\nВаш возраст в днях: " +
    ageInDays +
    "\nЧерез 5 лет вам будет: " +
    futureAge +
    "\nВаш пол: " +
    (isMale ? "мужской" : "женский") +
    "\nВы на пенсии: " +
    (isRetired ? "да" : "нет")
);
