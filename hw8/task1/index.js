let data = [];
const submitButton = document.querySelector(".submit");
const userTable = document.querySelector(".usertable tbody");
const deleteAllButton = document.querySelector(".delete-button");
const userForm = document.querySelector(".userform");
const errorMessage = document.querySelector(".error");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const userName = document.querySelector(".name");
  const userSurame = document.querySelector(".surname");
  const userAge = document.querySelector(".age");

  const user = {
    id: Date.now(),
    name: userName.value,
    surname: userSurame.value,
    age: userAge.value,
  };

  if (user.name === "" || user.surname === "" || user.age === "") {
    errorMessage.style.visibility = "visible";
    return;
  }

  data.push(user);

  userTable.innerHTML = "";

  data.forEach((item, index) => {
    userTable.innerHTML += `<tr class="newUser" id=${item.id}>
  <td>${index + 1}</td>
  <td>${item.name}</td>
  <td>${item.surname}</td>
  <td>${item.age}</td>
  </tr>
  `;
  });

  userForm.reset();
  errorMessage.style.visibility = "hidden";
});

deleteAllButton.addEventListener("click", function () {
  userTable.innerHTML = "";
  userId = 0;
  data = [];
});
console.log(data);
