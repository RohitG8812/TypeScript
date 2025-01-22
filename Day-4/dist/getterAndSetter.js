"use strict";
// class Persons {
//   //? directly write constructor here
//   //? it was compulsory to add access modifiers
//   public _age: number | undefined;
//   constructor(public name: string, protected hobbies: string[]) {
//     //? doesn't work when we define age (persons1.age = 230) like this
//     // if (this.age > 100) {
//     //   throw new Error("Age must be Less than 100");
//     // }
//   }
//   public set age(age: number) {
//     if (age > 100 || age < 0) {
//       throw new Error("age is Invalid");
//     }
//     this._age = age;
//   }
//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("age is Invalid");
//     }
//     return this._age;
//   }
//   introduction(): string {
//     return `i am ${this.name}, and i am ${
//       this.age
//     } years old and my Hobbies are ${this.hobbies.join(", ")}`;
//   }
// }
// //* Person classes
// const persons1: Persons = new Persons("Rohit", ["Coding", "Watching Movies"]);
// persons1.age = 20;
// console.log(persons1.age)
// const persons2: Persons = new Persons("Raj", ["Coding", "Watching Movies"]);
// console.log(persons1.introduction());
// console.log(persons2);
