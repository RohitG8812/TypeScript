console.log("Hello world!");

let mainDiv = document.querySelector("#mainDiv") as HTMLDivElement;
let mainBody = document.querySelector("body") as HTMLBodyElement;
let btn = document.querySelector("button") as HTMLButtonElement;

let whiteBG = true;
btn.addEventListener("click", () => {
  if (whiteBG) {
    mainBody.style.backgroundColor = "aqua";
  } else {
    mainBody.style.backgroundColor = "#fff";
  }

  whiteBG = !whiteBG;
});
