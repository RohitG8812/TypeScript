"use strict";
class Persons {
    //? directly write constructor here
    //? it was compulsory to add access modifiers
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduction() {
        return `i am ${this.name}, and i am ${this.age} years old and my Hobbies are ${this.hobbies.join(", ")}`;
    }
}
class Students extends Persons {
    constructor(name, age, hobbies, 
    //? here we write access modifiers only for grade because for others we already define in parent class
    grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduction() {
        return `i am ${this.name}, and i am ${this.age} years old and i am in grade ${this.grade} and my Hobbies are ${this.hobbies.join(", ")}`;
    }
}
class Teachers extends Persons {
    constructor(name, age, hobbies, gender, subject) {
        super(name, age, hobbies);
        this.gender = gender;
        this.subject = subject;
    }
    introduction() {
        return `i am ${this.name}, and i am ${this.age} years old and my Hobbies are ${this.hobbies.join(", ")}`;
    }
}
//* Person classes
const persons1 = new Persons("Rohit", 23, [
    "Coding",
    "Watching Movies",
]);
const persons2 = new Persons("Raj", 21, ["Coding", "Watching Movies"]);
console.log(persons1.introduction());
console.log(persons2);
//* student classes
const student1 = new Students("Rohit", 23, ["Coding", "Watching Movies"], 12);
const student2 = new Students("Raj", 21, ["Coding", "Watching Movies"], 10);
console.log(student1.introduction());
//* Teacher classes
const teacher1 = new Teachers("Rohit", 23, ["Coding", "Watching Movies"], "male", "English");
const teacher2 = new Teachers("Raj", 21, ["Coding", "Watching Movies"], "male", "Maths");
console.log(teacher1.introduction());
console.log(teacher2);
