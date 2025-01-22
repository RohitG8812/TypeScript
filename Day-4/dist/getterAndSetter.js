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
//! Assignments Problem
//? video link of thapa technical video no 28 of typescript playList : https://youtu.be/tnFK1stXQ2U?si=rBxnciT0U74FOXfK
//* 1. Bank Balance Problem
// class BankAccount {
//   private _balance: number = 0;
//   constructor(public name: string, public accountNumber: number) {}
//   public set balance(newBalance: number) {
//     if (newBalance < 0) {
//       throw new Error("balance must be greater than one");
//     }
//     this._balance = newBalance;
//   }
//   public get balance(): number {
//     return this._balance;
//   }
//   introduction() {
//     return `Mr. ${this.name} has ₹${this.balance}, in there ${this.accountNumber} Account`;
//   }
// }
// const account1: BankAccount = new BankAccount("Rohit Gupta", 321456);
// account1.balance = 100000;
// console.log(account1.balance);
// console.log(account1.introduction());
//* 2. Temperature Problem
class Temperature {
    constructor(city, date) {
        this.city = city;
        this.date = date;
        this._celsius = 0;
    }
    set celsius(temperature) {
        this._celsius = temperature;
    }
    get celsius() {
        return this._celsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(fahrenheitV) {
        this._celsius = ((fahrenheitV - 32) * 5) / 9;
    }
    intro() {
        return `The Temperature of ${this.city} for Date ${this.date.toUTCString()} is ${this._celsius}℃ and fahrenheit is ${this.fahrenheit}`;
    }
}
const celsius1 = new Temperature("Virar", new Date());
celsius1.celsius = 25;
console.log(celsius1.fahrenheit);
console.log(celsius1.intro());
