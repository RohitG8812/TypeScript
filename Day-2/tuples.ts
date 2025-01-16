// type Details = readonly [string, number, boolean]; //? this is tuples

// const personDetails: Details = ["Rohit", 23, true];
// console.log(personDetails);

// const personDetails2: Details = ["Raj", 21, false];
// console.log(personDetails2);

// personDetails2.push('Hello') //? so error because tuples are readOnly

// const detailsFunc = (detail: Details): string => {
//   let [name, age, hasDrivingLic] = detail;
//   return `${name} is ${age} years old and ${
//     hasDrivingLic ? "has Driving License" : "not has Driving License"
//   }`;
// };

// console.log(detailsFunc(personDetails));
// console.log(detailsFunc(personDetails2));

//! assignment

//* 1

// type Details = readonly [string, number, number];

// const product1: Details = ["Iphone 16 pro max", 169000, 13];
// const product2: Details = ["Infinix Note 40 Pro", 21999, 28];

// console.log(product1, product2);

//* 2

// type Details = readonly [string, number, number];

// const product1: Details = ["Iphone 16 pro max", 169000, 13];
// const product2: Details = ["Infinix Note 40 Pro", 21999, 28];

// const products: any[] = [product1, product2];

// // console.log(products);

// const checkStock = (products: any[]) => {
//   return products.map((product: string, index) => {
//     let [name, price, quantity] = product;
//     return `product name : ${name}; quantity : ${quantity}; price : ${price}`;
//   });
// };

// console.log(checkStock(products));

//? efficient way
// type Details = [string, number, number];

// const products: Details[] = [
//   ["Iphone 16 pro max", 169000, 13],
//   ["Infinix Note 40 Pro", 21999, 28],
// ];

// const stockDetails = (allProducts: any[]) => {
//   return allProducts.map((product: string, index) => {
//     let [name, price, quantity] = product;
//     return `product name : ${name}; quantity : ${quantity}; price : ${[price]}`;
//   });
// };

// console.log(stockDetails(products));

//* 3

// type StudentGrade = readonly [string, number];

// const Maths: StudentGrade = ["Maths", 90];
// const English: StudentGrade = ["English", 95];
// const Science: StudentGrade = ["Science", 80];

// let grades: any[] = [Maths, English, Science];

// const calculateAverage = (gradesOfStudent: any[]) => {
//   let grade: number[] = [];
//   gradesOfStudent.map((subject, index) => {
//     let [sub, marks] = subject;
//     return grade.push(marks);
//   });
//   let totalMarks: number = grade.reduce((total, i) => total + i);
//   let averageMarks: number = totalMarks / grade.length;
//   return averageMarks;
// };

// console.log(calculateAverage(grades));

//? efficient way
// type SubjectGrade = readonly [string, number];

// const studentGrade: SubjectGrade[] = [
//   ["Math", 90],
//   ["English", 95],
//   ["Science", 80],
// ];

// const calculateAverage = (grades: SubjectGrade[]) => {
//   const totalMarks: number = grades.reduce((total, i) => total + i[1], 0);
//   const averageMarks: number = totalMarks / grades.length;
//   return averageMarks;
// };
// console.log(calculateAverage(studentGrade));

//* 4

type Weather = [string, number, string];

const WeatherData: Weather[] = [
  ["Mumbai", 10, "Cold"],
  ["Delhi", 2, "Extreme Cold"],
  ["JK", -3, "Very Extreme Cold"],
];

const displayWeather = (weatherData: any[]) => {
  return weatherData.map((weather, i) => {
    let [city, temp, weatherCondition] = weather;
    return `${city} has a ${weatherCondition} weather with ${temp}℃ temperature`;
  });
};

console.log(displayWeather(WeatherData));

//? output
// [
//   "Mumbai has a Cold weather with 10℃ temperature",
//   "Delhi has a Extreme Cold weather with 2℃ temperature",
//   "JK has a Very Extreme Cold weather with -3℃ temperature",
// ];
