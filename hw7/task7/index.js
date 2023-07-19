const button = document.querySelector(".button1");
const value = document.querySelector(".value");

let counter = 0;
const maxClicks = 5;
value.innerHTML = counter;
const clickHandler = () => {
  counter++;
  value.innerHTML = counter;
  if (counter === maxClicks) {
    button.removeEventListener("click", clickHandler);
    value.innerHTML = "event listener removed";
  }
};

button.addEventListener("click", clickHandler);
