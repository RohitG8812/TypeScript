// enum Roles {
//   user = "user",
//   admin = "admin",
// }

// type LoginDetails = {
//   name: string;
//   email: string;
//   password: string;
//   role: Roles;
// };

// const user1: LoginDetails = {
//   name: "John",
//   email: "John@example.com",
//   password: "password",
//   role: Roles.admin,
// };

// const user2: LoginDetails = {
//   name: "Rohit",
//   email: "rohit@example.com",
//   password: "password",
//   role: Roles.user,
// };

// console.log(user1)
// console.log(user2)

//*

enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetails = {
  name: "John",
  email: "John@example.com",
  password: "password",
  role: Roles.user,
};

const user2: LoginDetails = {
  name: "Rohit",
  email: "rohit@example.com",
  password: "password",
  role: Roles.admin,
};

const isAdmin = (user: LoginDetails): string => {
  return `isAdmin : ${ user.role === "admin" ? true : false}`
};

console.log(user1);
console.log(user2);
console.log(isAdmin(user1));
