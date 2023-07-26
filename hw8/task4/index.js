let data = [];
const employeeForm = document.querySelector(".employee-form");
const saveBtn = document.querySelector(".save-btn");

const employeeList = document.querySelector(".employee-list tbody");
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

saveBtn.addEventListener("click", function (event) {
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
});

cancelBtn.addEventListener("click", closeEditPopup);

salaryFromSmallest.addEventListener("click", function () {
  data.sort((a, b) => a.salary - b.salary);
  updateEmployeeList();
});

salaryFromLargest.addEventListener("click", function () {
  data.sort((a, b) => b.salary - a.salary);
  updateEmployeeList();
});

hireDateFromSmallest.addEventListener("click", function () {
  data.sort((a, b) => new Date(a.hireDate) - new Date(b.hireDate));
  updateEmployeeList();
});

hireDateFromLargest.addEventListener("click", function () {
  data.sort((a, b) => new Date(b.hireDate) - new Date(a.hireDate));
  updateEmployeeList();
});
