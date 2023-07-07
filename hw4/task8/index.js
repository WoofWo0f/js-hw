const users = [
  { name: "Alex", age: 31 },
  { name: "Olga", age: 17 },
  { name: "Carl", age: 15 },
  { name: "Nancy", age: 28 },
  { name: "Eric", age: 9 },
];

let underageUsers = [];
for (user of users) {
  if (user.age < 18) {
    underageUsers.push(user);
  }
}

console.log(underageUsers);

// const underageUsers = (arr) => {
//   let result = arr.filter((item) => item.age < 18);
//   console.log(result);
// };

// underageUsers(users);
