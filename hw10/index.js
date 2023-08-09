let currentPage = 1;

const getUsers = async (page) => {
  try {
    const userList = document.querySelector(".user-list");
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const result = await response.json();
    const users = result.data;

    userList.innerHTML = "";

    users.forEach((user) => {
      userList.innerHTML += `
        <tr>
          <td>${user.id}</td>
          <td><img src="${user.avatar}" width="80px"></td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td>${user.email}</td>
        </tr>
      `;
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

const getPrevPage = () => {
  if (currentPage > 1) {
    currentPage--;
    getUsers(currentPage);
  }
};

const getNextPage = () => {
  currentPage++;
  getUsers(currentPage);
};

const init = async () => {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  await getUsers(currentPage);
  prevBtn.addEventListener("click", getPrevPage);
  nextBtn.addEventListener("click", getNextPage);
};

init();
