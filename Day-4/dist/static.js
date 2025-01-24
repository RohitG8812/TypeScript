"use strict";
class Persons {
    //? methods
    static add(a, b) {
        return a + b;
    }
    static sub(a, b) {
        return a - b;
    }
    static product(a, b) {
        return a * b;
    }
}
//? properties
Persons.PI = Math.PI;
console.log(Persons.PI); //? directly accessing the value of PI
console.log(Persons.add(10, 5));
console.log(Persons.sub(5, 10));
console.log(Persons.product(5, 10));
