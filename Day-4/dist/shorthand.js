"use strict";
// class Persons {
//   //? directly write constructor here
//   //? it was compulsory to add access modifiers
//   constructor(
//     public name: string,
//     public age: number,
//     protected hobbies: string[]
//   ) {}
//   introduction(): string {
//     return `i am ${this.name}, and i am ${
//       this.age
//     } years old and my Hobbies are ${this.hobbies.join(", ")}`;
//   }
// }
// class Students extends Persons {
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     //? here we write access modifiers only for grade because for others we already define in parent class
//     public grade: number
//   ) {
//     super(name, age, hobbies);
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
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     public gender: string,
//     public subject: string
//   ) {
//     super(name, age, hobbies);
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
