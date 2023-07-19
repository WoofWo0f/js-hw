const mainTitle = document.querySelector("h1");
const text = document.querySelector(".text");
const listItem3 = document.querySelector("#listItem3");
const list = document.querySelectorAll(".list-item");

console.log(text.textContent);

mainTitle.textContent = "Title level 1";
console.log(mainTitle.textContent);

listItem3.innerHTML = "<strong>List item 3</strong>";

const link = document.querySelector("a");
link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener");
link.removeAttribute("role");
link.setAttribute("href", "https:/google.com");

console.log(link);

const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
const img = document.createElement("img");

img.setAttribute("src", imageUrl);

mainTitle.after(img);

const imgClone = img.cloneNode(true);
document.body.append(imgClone);

const links = [
  "https://learn.javascript.ru",
  "https://learn.javascript.ru/searching-elements-dom",
  "https://learn.javascript.ru/structure",
  "#test",
];

links.forEach((link, index) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link);
  anchor.textContent = "Link " + (index + 1);
  anchor.classList.add("link");
  document.body.append(anchor);
});
