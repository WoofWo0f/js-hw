let data = [];
const toDoForm = document.querySelector(".todo-form");
const submit = document.querySelector(".submit-button");
const toDoList = document.querySelector(".todo-list");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.querySelector(".title");
  const description = document.querySelector(".description");

  const toDoTask = {
    id: Date.now(),
    title: title.value,
    description: description.value,
  };

  data.push(toDoTask);

  toDoList.innerHTML = "";

  data.forEach((item, index) => {
    toDoList.innerHTML += `
      <li class="todo-task" id=${item.id}>
        <p>#${index + 1}</p>
        <p><strong>Title: ${item.title}</strong></p>
        <p>Description: ${item.description}</p>
        <div class="task-buttons">
        <div><button class="edit-task button">EDIT</button></div>
        <div><button class="delete-task button">DELETE</button></div>
        </div>
      </li>`;
  });
  toDoForm.reset();
});

toDoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-task")) {
    const currentTask = event.target.closest(".todo-task");
    const toDoTaskId = currentTask.id;

    console.log(toDoTaskId);
    console.log(currentTask.id);
    console.log(data);

    data = data.filter((item) => item.id !== +toDoTaskId);

    toDoList.innerHTML = "";

    data.forEach((item, index) => {
      toDoList.innerHTML += `
      <li class='todo-task' id=${item.id}>
        <p>#${index + 1}</p>
        <p><strong>Title: ${item.title}</strong></p>
        <p>Description: ${item.description}</p>
        <div class="task-buttons">
        <div><button class="edit-task button">EDIT</button></div>
        <div><button class="delete-task button">DELETE</button></div>
        </div>
      </li>`;
    });
  }
});
