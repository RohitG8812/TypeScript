class Persons {
  //? properties
  public static PI: number = Math.PI;

  //? methods
  static add(a: number, b: number): number {
    return a + b;
  }
  static sub(a: number, b: number): number {
    return a - b;
  }
  static product(a: number, b: number): number {
    return a * b;
  }
}

console.log(Persons.PI); //? directly accessing the value of PI
console.log(Persons.add(10, 5))
console.log(Persons.sub(5, 10))
console.log(Persons.product(5, 10))
