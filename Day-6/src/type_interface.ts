//* type

// type Stud = {
//   name: string;
//   age: number;
// };

// type StudAdd = {
//   city: string;
//   state: string;
// };

// // type data = Stud | StudAdd //? using union (all properties of any 1 type is mandatory)
// type data = Stud & StudAdd; //? using intersection (all properties we mandatory)

// const bioData: data = {
//   name: "Rohit",
//   age: 23,
//   city: "Mumbai",
//   state: "MH",
// };

// console.log(bioData);

//* Interface

interface Stud {
  name: string;
  age: number;
}

interface StudAdd {
  city: string;
  state: string;
}

// interface Stud {
//   city: string;
//   state: string;
// }

interface Data extends Stud, StudAdd {} //? using different interface name
interface Data extends Stud {} //? using same interface name

const bioData: Data = {
  name: "Rohit",
  age: 23,
  city: "Mumbai",
  state: "MH",
};

console.log(bioData);
