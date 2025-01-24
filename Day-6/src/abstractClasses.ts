abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateShape(): number;
  abstract printArea(): string;
}

//* For Circle Shape
// class Circle extends Shape {
//   constructor(protected color: string, protected radius: number) {
//     super(color);
//   }

//   public calculateShape(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   public printArea(): string {
//     return `The Area of Circle for Radius ${
//       this.radius
//     } is ${this.calculateShape()} and Color is ${this.color}`;
//   }
// }

// const circle1 = new Circle("red", 5);
// circle1.calculateShape();
// console.log(circle1.printArea());

//* For Square Shape
// class Square extends Shape {
//   constructor(protected color: string, protected area: number) {
//     super(color);
//   }

//   public calculateShape(): number {
//     return this.area * this.area;
//   }

//   public printArea(): string {
//     return `The Area of Square is ${this.calculateShape()} and Color is ${
//       this.color
//     }`;
//   }
// }

// const square1 = new Square("red", 5);
// console.log(square1.printArea());
