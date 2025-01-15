//* function
//? normal function
// function greet(name: string, id: number) : string {
//   return `Welcome, ${name} and your id is ${id}`;
// }
// console.log(greet("Rohit", 101));

//* arrow function
// const greet = (name: string, id: number): string => {
//   return `Welcome, ${name} and your id is ${id}`;
// };
// console.log(greet("Rohit", 101));

//! assignment
//* 1
// function isPalindrome(str: string): boolean {
//   //? using sliding window
//   //   let start = 0;
//   //   let end = str.length - 1;
//   //   while (start < end) {
//   //     if (str[start] === str[end]) {
//   //       start++;
//   //       end--;
//   //     } else {
//   //       return false;
//   //     }
//   //   }
//   //   return true;

//   //? simple
//   let reverseStr = str.split("").reverse().join("");
//   return reverseStr === str ? true : false;
// }
// let str = "race";
// let res = isPalindrome(str);
// console.log(res);

//* 2
// function calculateAverage(arr: number[]): number {
//   let arrLength = arr.length;
//   let arrSum = arr.reduce((acc, i) => (acc += i));
//   return arrSum / arrLength;
// }
// let res = calculateAverage([2, 3, 4, 5]);
// console.log(res);

//* 3
// function findMaxValue(arr: number[]): number {
//   let maxNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (maxNum < arr[i]) {
//       maxNum = arr[i];
//     }
//   }
//   return maxNum;
// }
// let res = findMaxValue([3, 2, 5, 8, 1]);
// console.log("maxNum is " + res);

//! optional and default parameters

//? default parameters
// function greet(name: string, id: number = 101): string {
//   return `Welcome, ${name} and your id is ${id}`;
// }
// console.log(greet("Rohit"));

//? optional parameters
// function greet(name: string, id?: number): string {
//   return id ? `Welcome, ${name} and your id is ${id}` : `Welcome, ${name}`;
// }
// console.log(greet("Rohit"));
