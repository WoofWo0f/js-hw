const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    const message = event.target.closest(".message");
    if (message) {
      message.style.display = "none";
    }
  }
});
