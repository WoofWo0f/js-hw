let userName = prompt("Введите Ваше имя:").toLowerCase();
let userLastname = prompt("Введите Вашу фамилию:").toLowerCase();

alert(
  "Привет, " +
    userName[0].toUpperCase() +
    userName.slice(1) +
    " " +
    userLastname[0].toUpperCase() +
    userLastname.slice(1) +
    "!"
);
