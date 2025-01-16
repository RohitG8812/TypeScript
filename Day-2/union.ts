//* union was denoted by '|'
// const func = (value: string | number | boolean): string => {
//   if (typeof value === "number") {
//     return `Double of ${value} is ${value * 2}`;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "boolean") {
//     return `Boolean Value : ${value}`;
//   } else {
//     return `${value} is not a number, string, or boolean`;
//   }
// };

// let res = func("Rohit");
// let res1 = func(false);
// let res2 = func(2025);
// console.log(res);
// console.log(res1);
// console.log(res2);

//* defining via type

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   employeeId: number;
//   department: string;
// };

// type EmployeeDetails = Person | Employee;

//? show error here because we atleast need to satisfy one type either it was Person or Employee
//? we need to use the person both name and age here we can ignore the Employee it was same in case we defining Employee..
// const employee: EmployeeDetails = {
//   name: "Rohit Gupta",
// };

//? now its work perfectly without any Employee properties
// const employee: EmployeeDetails = {
//   name: "Rohit Gupta",
//   age: 23,
// };

//? till it was working properly even we only define 1 property of Employee, it was because we defined all the properties of Person
// const employee: EmployeeDetails = {
//   name: "Rohit Gupta",
//   age: 23,
//   employeeId: 101,
// };

// console.log(employee)
//* assignment
// const func = (value: string | number | boolean): string => {
//   if (typeof value === "number") {
//     return `$${value}.00`;
//   } else if (typeof value === "boolean") {
//     return value == true ? "Yes" : "No";
//   } else if (typeof value === "string") {
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   } else {
//     return `${value} is not a number, string, or boolean`;
//   }
// };

// let res = func(20);
// let res1 = func("rohit");
// let res2 = func(true);
// console.log(res);
// console.log(res1);
// console.log(res2);
