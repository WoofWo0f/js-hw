let data = [];
const toDoForm = document.querySelector(".todo-form");
const submit = document.querySelector(".submit-button");
const toDoList = document.querySelector(".todo-list");
const save = document.querySelector(".save-button");
const edit = document.querySelector(".edit-button");
const popup = document.querySelector(".popup");
const editTitle = document.querySelector(".edit-title");
const editDescription = document.querySelector(".edit-description");

const updateToDoList = function () {
  toDoList.innerHTML = "";
  data.forEach((item, index) => {
    toDoList.innerHTML += `
      <li class="todo-task" id=${item.id}>
        <p>#${index + 1}</p>
        <p><strong>Title: ${item.title}</strong></p>
        <p>Description: ${item.description}</p>
        <div class="task-buttons">
        <div><button class="edit-button button">EDIT</button></div>
        <div><button class="delete-button button">DELETE</button></div>
        </div>
      </li>`;
  });
};

const openEditPopup = function (task) {
  popup.dataset.taskId = task.id;

  editTitle.value = task.title;
  editDescription.value = task.description;
  popup.classList.add("open");
};

const closeEditPopup = function () {
  popup.classList.remove("open");
};

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
  updateToDoList();
  toDoForm.reset();
});

toDoList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const currentTask = event.target.closest(".todo-task");
    const toDoTaskId = currentTask.id;
    data = data.filter((item) => item.id !== +toDoTaskId);
    updateToDoList();
  } else if (event.target.classList.contains("edit-button")) {
    const currentTask = event.target.closest(".todo-task");
    const toDoTaskId = currentTask.id;
    const taskToEdit = data.find((item) => item.id === +toDoTaskId);
    openEditPopup(taskToEdit);
  }
});

save.addEventListener("click", function () {
  const editTitleInput = document.querySelector(".edit-title");
  const editDescriptionInput = document.querySelector(".edit-description");
  const currentTaskId = popup.dataset.taskId;
  const editedTask = data.find((item) => item.id === +currentTaskId);

  editedTask.title = editTitleInput.value;
  editedTask.description = editDescriptionInput.value;
  closeEditPopup();
  updateToDoList();
});
