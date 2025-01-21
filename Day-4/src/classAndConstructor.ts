//* Class and Constructor

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const person1 = new Person("Rohit", 23, ["Coding", "Watching Movies"]);
const person2 = new Person("Raj", 21, ["Coding", "Watching Movies"]);
const person3 = new Person("Rahul", 19, ["Coding", "Watching Movies"]);

console.log(person1);
console.log(person2);
console.log(person3);
