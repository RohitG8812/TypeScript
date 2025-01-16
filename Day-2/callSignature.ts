//! Call Signature

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
};

const student: Student = {
  name: "Rohit Gupta",
  age: 23,
  greet: (country): string => {
    return `Welcome My Name is ${student.name} and i am ${student.age} years old and i am from ${country}`;
  },
};
console.log(student);
console.log(student.greet("India"));
