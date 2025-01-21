"use strict";
//* Access Modifiers
class Persons {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduction() {
        return `i am ${this.name}, and i am ${this.age} years old and my Hobbies are ${this.hobbies.join(", ")}`;
    }
}
//? using inheritance from Person
class Students extends Persons {
    constructor(name, age, hobbies, grade) {
        //? using super keyword for getting the parent properties
        super(name, age, hobbies);
        this.grade = grade;
    }
}
//* Person classes
const persons1 = new Persons("Rohit", 23, [
    "Coding",
    "Watching Movies",
]);
const persons2 = new Persons("Raj", 21, ["Coding", "Watching Movies"]);
console.log(persons1.introduction());
// console.log(persons2.hobbies); //! Error = Property 'hobbies' is private and only accessible within class 'Persons'
//? protected access modifiers
// console.log(persons1.age); //?!Error = Property 'age' is protected and only accessible within class 'Persons' and its subclasses.
//* student classes
const student1 = new Students("Rohit", 23, ["Coding", "Watching Movies"], 12);
const student2 = new Students("Raj", 21, ["Coding", "Watching Movies"], 10);
console.log(student1.introduction());
