const elemProperty = document.querySelector(".button2");
elemProperty.onclick = function () {
  alert("elemProperty");
};

const eventListener = document.querySelector(".button3");
eventListener.addEventListener("click", function () {
  alert("eventListener");
});
