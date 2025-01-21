//* Access Modifiers

class Persons {
  //? Public access modifier
  public name: string;
  //? protected access modifier (line no : 53)
  protected age: number;
  //? private access modifier (line no : 39 and 51)
  private hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduction(): string {
    return `i am ${this.name}, and i am ${
      this.age
    } years old and my Hobbies are ${this.hobbies.join(", ")}`;
  }
}

//? using inheritance from Person
class Students extends Persons {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    //? using super keyword for getting the parent properties
    super(name, age, hobbies);
    this.grade = grade;
  }

//   introduction(): string {
//     return `i am ${this.name}, and i am ${
//       this.age
//     } years old and i am in grade ${this.grade}
//        and my Hobbies are ${this.hobbies.join(", ")}`; //! ERROR = not accessible here because of private access modifier
//   }
}

//* Person classes
const persons1: Persons = new Persons("Rohit", 23, [
  "Coding",
  "Watching Movies",
]);
const persons2: Persons = new Persons("Raj", 21, ["Coding", "Watching Movies"]);

console.log(persons1.introduction());
// console.log(persons2.hobbies); //! Error = Property 'hobbies' is private and only accessible within class 'Persons'

//? protected access modifiers
// console.log(persons1.age); //?!Error = Property 'age' is protected and only accessible within class 'Persons' and its subclasses.

//* student classes
const student1: Students = new Students(
  "Rohit",
  23,
  ["Coding", "Watching Movies"],
  12
);
const student2: Students = new Students(
  "Raj",
  21,
  ["Coding", "Watching Movies"],
  10
);

console.log(student1.introduction());
