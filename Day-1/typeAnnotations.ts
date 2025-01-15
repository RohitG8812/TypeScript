//! number type
// let result: number = Math.sqrt(16);
// console.log(result)

// let a: number = 45;
// let b: number = 10;
// let computedResult: number = a * b;
// console.log(computedResult);

//! string type
// let firstName: string = "Rohit";
// let lastName: string = "Gupta";
// let fullName: string = firstName + " " + lastName;
// console.log(fullName)

// function value(a : number, b : string) : string{
//     return a + b
// }
// console.log(value(10, 'Rohit'))

//* assignment on number and string type
//? 1
// let message : string = 'Hello, TypeScript!'
// console.log(message)

//? 2
// let firstName: string = "Rohit";
// let lastName: string = "Gupta";
// let fullName: string = firstName + " " + lastName;
// console.log(fullName)

//? 3
// let str: string = "Rohit Gupta";
// let lengthOfStr: number = str.length;
// console.log(lengthOfStr);

//? 4
// let name1: string = "rohit Gupta";
// let upperCase: string = name1.toUpperCase();
// console.log(upperCase);
// let lowerCase: string = name1.toLowerCase();
// console.log(lowerCase);

//? 5
// let longText: string = "hypertext markup language";
// let characters: string = longText.slice(0, 5);
// console.log(characters);

//? 6
// let str1: string = "Hello, world!";
// let str2: string = "Hello, rohit!";
// console.log(str1 === str2);

//? 7
// let product: string = "Iphone 16 pro max";
// let price: number = 169000;
// let statement = `${product} is priced at ${price}`;
// console.log(statement);

//! Boolean type
// let isTrue: boolean = true
// console.log(isTrue)

//! BigInt type
// let largeNum: number = 900719925474099123; //? show 900719925474099100 as a output
// let largeNum: bigint = 900719925474099123n;
// console.log(largeNum);

//* assignment on Boolean and BigInt
//? 1
// function isEven(n: number): boolean {
//   return n % 2 === 0;
// }
// console.log(isEven(69));

//? 2
// function isDivisibleBy4And8(n: number): boolean {
//   return n % 4 === 0 && n % 8 === 0;
// }
// console.log(isDivisibleBy4And8(12))

//? 3
// let bigNumber: bigint = 900719925474099158n;
// let anotherBigNumber: bigint = 900719925474099100n;

// let sum = bigNumber - anotherBigNumber;
// console.log(sum);

//! any type
// let num: any = 10;
// num = "ten";
// num = true;
// console.log(num); //? print true without showing any error

//! unknown type
// let num: unknown = 10;
// num = true;
// num = "ten";
// num = [1, 2, 3, 4];

// if (typeof num === "string") {
//   console.log("num is a string");
// } else if (typeof num === "number") {
//   console.log("num is a number");
// } else if (typeof num === "boolean") {
//   console.log("num is a boolean");
// }

// async function fetchData(): Promise<unknown> {
//   const response = await fetch("https://api.github.com/users/rohitg8812");
//   const data = await response.json();
//   return data;
// }

// function processData() {
//   return new Promise((resolve, reject) => {
//     try {
//       const response = fetchData();
//       resolve(response);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }

// processData().then((data) => {
//   console.log(data);
// });
