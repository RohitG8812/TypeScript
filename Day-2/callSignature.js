"use strict";
//! Call Signature
const student = {
    name: "Rohit Gupta",
    age: 23,
    greet: (country) => {
        return `Welcome My Name is ${student.name} and i am ${student.age} years old and i am from ${country}`;
    },
};
console.log(student);
console.log(student.greet("India"));
