"use strict";
console.log("Hello");
let btn = document.querySelector("button");
let body = document.querySelector("body");
let whiteBG = true;
btn.addEventListener("click", () => {
    whiteBG
        ? (body.style.backgroundColor = "aqua")
        : (body.style.backgroundColor = "#fff");
    whiteBG = !whiteBG;
});
