//* using union
// function log(value: string | number | boolean): string | number | boolean {
//   return value;
// }
// console.log(log(42));
// console.log(log("Rohit"));
// console.log(log(true));

//* it was not a good approach to write all the type in union when we don't know the type of value
//* so that's why we use generics instead of union

// function log<T>(value: T): T {
//   return value;
// }
// let numberResult = log<number>(42); //? here <number> is generic type we are defining, it will also work when we don't define it
// let stringResult = log<string>("Rohit");
// let booleanResult = log<boolean>(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);

//* assignment

// function add<T, U>(a: T, b: U) {
//   return `${a} and ${b}`;
// }

// let usingTwoTypeTogether = add<number, string>(20, "Rohit");
// console.log(usingTwoTypeTogether);

function add<T, U, Z>(a: T, b: U, c: Z) {
  return `${a} and ${b} and ${c}`;
}

let usingTwoTypeTogether = add<number, string, boolean>(20, "Rohit", true);
let usingTwoTypeTogether2 = add<string, boolean, number>("Rohit", true, 20);
console.log(usingTwoTypeTogether);
console.log(usingTwoTypeTogether2);
