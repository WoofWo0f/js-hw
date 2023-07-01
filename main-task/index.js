let lastName = null;
let firstName = null;
let surName = null;
let age = null;

do {
  lastName = prompt("Введите вашу фамилию:");
} while (lastName === "");
do {
  firstName = prompt("Введите ваше имя:");
} while (firstName === "");
do {
  surName = prompt("Введите ваше отчество:");
} while (surName === "");
do {
  age = +prompt("Введите ваш возраст в годах:");
} while (age === "" || isNaN(age));

const isMale = confirm("Ваш пол - мужской?");

alert(`
Ваше ФИО: ${lastName} ${firstName} ${surName}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age * 365}  
Через 5 лет вам будет: ${age + 5} 
Ваш пол: ${isMale ? "мужской" : "женский"}
Вы на пенсии: ${(isMale && age >= 65) || (!isMale && age >= 55) ? "да" : "нет"}`);
