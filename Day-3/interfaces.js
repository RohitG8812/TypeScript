"use strict";
// interface Greet {
//   name: string;
//   age: number;
// }
const product1 = {
    name: "Iphone 16 pro max",
    price: 169000,
    quantity: 8,
};
const product2 = {
    name: "iphone 15",
    price: 59000,
    quantity: 23,
};
const product3 = {
    name: "iphone 12",
    price: 39000,
    quantity: 47,
};
const products = [product1, product2, product3];
console.log(products);
const stockDetailsArray = (products) => {
    return products.map((product, i) => {
        let { name, price, quantity } = product;
        let totalAmount = price * quantity;
        return `Product Name : ${name}; Quantity :  ${quantity}; MRP : ₹${price}; totalAmount : ₹${totalAmount}`;
    });
};
const stockDetailsString = (products) => {
    return products
        .map((product, i) => {
        let { name, price, quantity } = product;
        let totalAmount = price * quantity;
        return `Product Name : ${name}; Quantity :  ${quantity}; MRP : ₹${price}; totalAmount : ₹${totalAmount}`;
    })
        .join("\n");
};
let result = stockDetailsArray(products);
let result2 = stockDetailsString(products);
console.log(result);
console.log(result2);
