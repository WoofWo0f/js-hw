const dataFromStorage = localStorage.getItem("data");
const parsedData = JSON.parse(dataFromStorage);
let data = parsedData?.length ? parsedData : [];

const employeeForm = document.querySelector(".employee-form");
const saveBtn = document.querySelector(".save-btn");

const employeeList = document.querySelector(".employee-list");
const fireAllBtn = document.querySelector(".fire-all-btn");
const fireBtn = document.querySelector(".fire-btn");
const editBtn = document.querySelector(".edit-btn");

const popup = document.querySelector(".popup");
const editName = document.querySelector(".edit-name");
const editSurname = document.querySelector(".edit-surname");
const editSalary = document.querySelector(".edit-salary");
const editHireDate = document.querySelector(".edit-hire-date");
const changeBtn = document.querySelector(".change-btn");
const cancelBtn = document.querySelector(".cancel-btn");

const salaryFromSmallest = document.querySelector(".salary-from-smallest");
const salaryFromLargest = document.querySelector(".salary-from-largest");
const hireDateFromSmallest = document.querySelector(".hire-date-from-smallest");
const hireDateFromLargest = document.querySelector(".hire-date-from-largest");

const banner = document.querySelector(".banner");

const updateEmployeeList = function () {
  employeeList.innerHTML = "";
  data.forEach((item) => {
    employeeList.innerHTML += `
  <tr>
  <td><input class="checkbox" type="checkbox" data-id=${item.id}></td>
  <td>${item.name}</td>
  <td>${item.surname}</td>
  <td>${item.salary}</td>
  <td>${item.hireDate}</td>
  </tr>
    `;
  });
};

updateEmployeeList();

const openEditPopup = function (employee) {
  popup.dataset.employeeId = employee.id;

  editName.value = employee.name;
  editSurname.value = employee.surname;
  editSalary.value = employee.salary;
  editHireDate.value = employee.hireDate;
  popup.classList.add("open");
};

const closeEditPopup = function () {
  popup.classList.remove("open");
};

employeeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");
  const salary = document.querySelector(".salary");
  const hireDate = document.querySelector(".hire-date");

  const employee = {
    id: Date.now(),
    name: name.value,
    surname: surname.value,
    salary: salary.value,
    hireDate: hireDate.value,
  };

  data.push(employee);
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

fireAllBtn.addEventListener("click", function () {
  employeeList.innerHTML = "";
  data = [];
});

fireBtn.addEventListener("click", function () {
  const checkboxes = [...document.querySelectorAll(".checkbox:checked")];
  const employeesToFire = checkboxes.map((checkbox) => +checkbox.dataset.id);
  console.log(checkboxes);

  data = data.filter((item) => !employeesToFire.includes(item.id));
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

editBtn.addEventListener("click", function () {
  const checkboxes = [...document.querySelectorAll(".checkbox:checked")];
  if (checkboxes.length !== 1) {
    alert("Select one employee to edit.");
  } else {
    const employeeIdToEdit = +checkboxes[0].dataset.id;
    const employeeToEdit = data.find((item) => item.id === employeeIdToEdit);
    openEditPopup(employeeToEdit);
  }
});

changeBtn.addEventListener("click", function () {
  const employeeIdToEdit = +popup.dataset.employeeId;
  const employeeToEdit = data.find((item) => item.id === employeeIdToEdit);

  employeeToEdit.name = editName.value;
  employeeToEdit.surname = editSurname.value;
  employeeToEdit.salary = editSalary.value;
  employeeToEdit.hireDate = editHireDate.value;

  closeEditPopup();
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

cancelBtn.addEventListener("click", closeEditPopup);

salaryFromSmallest.addEventListener("click", function () {
  data.sort((a, b) => a.salary - b.salary);
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

salaryFromLargest.addEventListener("click", function () {
  data.sort((a, b) => b.salary - a.salary);
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

hireDateFromSmallest.addEventListener("click", function () {
  data.sort((a, b) => new Date(a.hireDate) - new Date(b.hireDate));
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

hireDateFromLargest.addEventListener("click", function () {
  data.sort((a, b) => new Date(b.hireDate) - new Date(a.hireDate));
  updateEmployeeList();
  localStorage.setItem("data", JSON.stringify(data));
});

setTimeout(() => {
  banner.classList.add("hidden");
}, 5000);
