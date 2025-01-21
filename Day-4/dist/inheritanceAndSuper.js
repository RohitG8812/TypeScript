"use strict";
// //* Inheritance and Super
// class Persons {
//   name: string;
//   age: number;
//   hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introduction(): string {
//     return `i am ${this.name}, and i am ${
//       this.age
//     } years old and my Hobbies are ${this.hobbies.join(", ")}`;
//   }
// }
// //? using inheritance from Person
// class Students extends Persons {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     //? using super keyword for getting the parent properties
//     super(name, age, hobbies);
//     this.grade = grade;
//   }
//   introduction(): string {
//     return `i am ${this.name}, and i am ${
//       this.age
//     } years old and i am in grade ${
//       this.grade
//     } and my Hobbies are ${this.hobbies.join(", ")}`;
//   }
// }
// class Teachers extends Persons {
//   gender: string;
//   subject: string;
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     gender: string,
//     subject: string
//   ) {
//     super(name, age, hobbies);
//     this.gender = gender;
//     this.subject = subject;
//   }
//   introduction(): string {
//     return `i am ${this.name}, and i am ${
//       this.age
//     } years old and my Hobbies are ${this.hobbies.join(", ")}`;
//   }
// }
// //* Person classes
// const persons1: Persons = new Persons("Rohit", 23, [
//   "Coding",
//   "Watching Movies",
// ]);
// const persons2: Persons = new Persons("Raj", 21, ["Coding", "Watching Movies"]);
// console.log(persons1.introduction());
// console.log(persons2);
// //* student classes
// const student1: Students = new Students(
//   "Rohit",
//   23,
//   ["Coding", "Watching Movies"],
//   12
// );
// const student2: Students = new Students(
//   "Raj",
//   21,
//   ["Coding", "Watching Movies"],
//   10
// );
// console.log(student1.introduction());
// //* Teacher classes
// const teacher1: Teachers = new Teachers(
//   "Rohit",
//   23,
//   ["Coding", "Watching Movies"],
//   "male",
//   "English"
// );
// const teacher2: Teachers = new Teachers(
//   "Raj",
//   21,
//   ["Coding", "Watching Movies"],
//   "male",
//   "Maths"
// );
// console.log(teacher1.introduction());
// console.log(teacher2);
