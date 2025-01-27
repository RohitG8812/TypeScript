console.log("Hello");

let btn = document.querySelector("button") as HTMLButtonElement;
let body = document.querySelector("body") as HTMLBodyElement;

let whiteBG: boolean = true;
btn.addEventListener("click", () => {
  whiteBG
    ? (body.style.backgroundColor = "aqua")
    : (body.style.backgroundColor = "#fff");
  whiteBG = !whiteBG;
});
