//! defining objects in typescript
// const person: {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// } = {
//   name: "Rohit Gupta",
//   age: 23,
//   isStudent: true,
//   address: {
//     city: "Virar",
//     country: "India",
//   },
// };
// console.log(person);

//! accessing objects
// console.log(person.address.country)

//! changing values of key
// person.address.city = "Mumbai";
// console.log(person);

//* assignment
// const product: { name: string; price: number; quantity: number } = {
//   name: "Apple Iphone 16 Pro Max",
//   price: 169000,
//   quantity: 12,
// };
// console.log(product)

//! Type Alias
// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   address: { city: string; country: string };
// };

// const student: Person = {
//   name: "Rohit Gupta",
//   age: 23,
//   isStudent: true,
//   address: {
//     city: "Virar",
//     country: "India",
//   },
// };

// const person: Person = {
//   name: "Raj Gupta",
//   age: 21,
//   isStudent: false,
//   address: {
//     city: "Mumbai",
//     country: "India",
//   },
// };

// console.log(student);
// console.log(person);

//! type alias with optional

// type Person = {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   profession?: string; //? optional
//   address: { city: string; country: string };
// };

// const student: Person = {
//   name: "Rohit Gupta",
//   age: 23,
//   isStudent: true,
//   profession: "Student",
//   address: {
//     city: "Virar",
//     country: "India",
//   },
// };

// const person: Person = {
//   name: "Raj Gupta",
//   age: 21,
//   isStudent: false,
//   address: {
//     city: "Mumbai",
//     country: "India",
//   },
// };

// console.log(student);
// console.log(person);

//* assignment

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product1: Product = {
  name: "iphone 16 pro max",
  price: 169000,
  quantity: 5,
};

const product2: Product = {
  name: "Infinix note 14 pro",
  price: 21999,
  quantity: 10,
};

const calculateTotalPrice = (product1: Product) => {
  return `Total Price is ${product1.price * product1.quantity}`;
};
console.log(calculateTotalPrice(product1));
