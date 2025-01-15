//! defining Array
//* using square brackets
// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// console.log(numbers)

//* using the array constructor
// let numbers2: number[] = new Array(1, 2, 3, 4, 5, 6);
// console.log(numbers2)

//* using Array.of Method
// let names: string[] = Array.of("Rohit", "Raju", "Gupta");
// console.log(names);

//* using Array.from Method
// let str = "Rohit";
// let arr: string[] = Array.from(str);
// console.log(arr);

//* array of multiple types
// let arr: any[] = ["rohit", 1, true];
// let arr: (string | number | boolean)[] = ["rohit", 1, true];
// console.log(arr);

//! accessing values from arrays
// let names: string[] = Array.of("Rohit", "Raju", "Gupta");
// console.log(names[2]);
// console.log(names.length);

//! iteration on values of arrays
// let names: string[] = Array.of("Rohit", "Raju", "Gupta");

//? for Loop
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

//? for each loop
// names.forEach((value, index) => {
//   console.log(value + " at index " + index);
// });

//? for of Loop
// for(let name of names){
//     console.log(name)
// }

//? for in loop
// for (let index in names) {
//   console.log(index);
// }

//! map method
// let numbers: number[] = [1, 2, 3, 4, 5, 6];

//? 1 double numbers
// let newMap: number[] = numbers.map((value: number, i: number) => {
//   return value * 2;
// });
// console.log(newMap);

//? convert numbers into strings
// let stringMap: string[] = numbers.map((value: number, index: number) => {
//   return value.toString();
// });
// console.log(stringMap);

//! filter method
// let numbers: number[] = [1, 2, 3, 4, 5, 6];

//? return numbers > 3
// let resArr: number[] = numbers.filter((value: number) => value > 3);
// console.log(resArr);

//? filter even numbers
// let resArr: number[] = numbers.filter((value: number) => value % 2 === 0);
// console.log(resArr);

//! assignment
let names: string[] = Array.of("Rohit", "Raju", "Gupta");
let numbers: number[] = [1, 2, 3, 4, 5, 6];

//? convert each name into uppercase
// let newArr: string[] = names.map((name: string) => name.toUpperCase());
// console.log(newArr)

//? convert each name into lowercase
// let newArr: string[] = names.map((name: string) => name.toLowerCase());
// console.log(newArr)

//? square of each number
// let newArr: number[] = numbers.map((n: number) => n ** 2);
// console.log(newArr);

let names2: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];

//? length greater than 4
// let newArr: string[] = names2.filter((name) => name.length > 4);
// console.log(newArr);

//? names start with 'A'
let newArr: string[] = names2.filter((name) => name.charAt(0) === "A");
console.log(newArr);
