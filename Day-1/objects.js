"use strict";
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
const product1 = {
    name: "iphone 16 pro max",
    price: 169000,
    quantity: 5,
};
const product2 = {
    name: "Infinix note 14 pro",
    price: 21999,
    quantity: 10,
};
const calculateTotalPrice = (product1) => {
    return `Total Price is ${product1.price * product1.quantity}`;
};
console.log(calculateTotalPrice(product1));
