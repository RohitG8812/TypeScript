// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   employeeId: number;
//   department: string;
// };

// type EmployeeDetails = Person & Employee;

// //? here we need to define all the properties of both type Person and Employee otherwise it shows an Error
// const employeeData: EmployeeDetails = {
//   name: "Rohit Gupta",
//   age: 23,
//   employeeId: 101,
//   department: "IT",
// };

// console.log(employeeData);

//* assignment 1

// type User = {
//   name: string;
//   age: number;
// };

// type LocationDetails = {
//   city: string;
//   country: string;
//   pinCode: number;
// };

// type userData = User & LocationDetails;

// const userProfile: userData = {
//   name: "John",
//   age: 23,
//   city: "San Francisco",
//   country: "CA",
//   pinCode: 4000001,
// };

// console.log(userProfile);

//* assignment 2

// type User = {
//   name: string;
//   age: number;
// };

// type LocationDetails = {
//   city: string;
//   country: string;
//   pinCode: number;
// };

// const user: User = {
//   name: "Rohit",
//   age: 23,
// };

// const locationData: LocationDetails = {
//   city: "Virar",
//   country: "India",
//   pinCode: 401303,
// };

//? instead of writing this see below code
// const createUserProfile = (user: User, location: LocationDetails): string => {
//   return `${user.name} is a ${user.age} years old and he was living in ${location.city}, ${location.country}, ${location.pinCode}`;
// };
// console.log(createUserProfile(user, locationData));

// const createUserProfile = (
//   user: User,
//   location: LocationDetails
// ): User & LocationDetails => {
//   return { ...user, ...location };
// };

// const myCompleteInfo = createUserProfile(
//   user,
//   locationData
// );

// console.log(myCompleteInfo);

//* assignment 3

type User = {
  id: number;
  name: string;
  email: string;
};

type Account = {
  accountId: number;
  accountType: string;
  balance: number;
};

const user: User = {
  id: 101,
  name: "John",
  email: "john@example.com",
};

const accountDetails: Account = {
  accountId: 9876123,
  accountType: "saving AC",
  balance: 98750,
};

const combineUserAndAccountDetails = (
  user: User,
  account: Account
): User & Account => {
  return { ...user, ...account };
};

let combineInfo = combineUserAndAccountDetails(user, accountDetails);
console.log(combineInfo);
