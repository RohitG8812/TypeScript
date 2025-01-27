//* using typeof guard

// const hobbiesVar = (hobbies: string | string[]): string | string[] => {
//   if (typeof hobbies === "object") {
//     return `My Hobbies are ${hobbies
//       .map((hobby: string, i: number) => hobby)
//       .join(", ")}.`;
//   } else {
//     return `My Hobby is ${hobbies}`;
//   }
// };
// // console.log(hobbiesVar(["Coding", "Watching Movies", "Playing Cricket"]));
// console.log(hobbiesVar("coding"));

//* using instanceof

// class Dog {
//   bark() {
//     console.log("Woof!");
//   }
// }

// class Cat {
//   meow() {
//     console.log("Meow!");
//   }
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// const dog: Dog = new Dog()

// makeSound(dog)

//* using custom type

// interface Circle {
//   kind: "circle";
//   r: number;
// }

// interface Square {
//   kind: "square";
//   a: number;
// }

// type Shape = Circle | Square;

// function isCircle(shape: Shape): shape is Circle {
//   return shape.kind === "circle";
// }

// function calculateArea(shape: Shape) {
//   if (isCircle(shape)) {
//     console.log(Math.PI * shape.r ** 2);
//   } else {
//     console.log(shape.a ** 2);
//   }
// }

// const square: Square = { kind: "square", a: 5 };
// const circle: Circle = { kind: "circle", r: 5 };

// calculateArea(square);
// calculateArea(circle);
