"use strict";
const func = (value) => {
    if (typeof value === "number") {
        return `Double of ${value} is ${value * 2}`;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "boolean") {
        return `Boolean Value : ${value}`;
    }
    else {
        return `${value} is not a number, string, or boolean`;
    }
};
// let res = func("Rohit");
// let res = func(false);
let res = func(2025);
console.log(res);
