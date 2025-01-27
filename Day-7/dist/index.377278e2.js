console.log("Hello world!");
let mainDiv = document.querySelector("#mainDiv");
let mainBody = document.querySelector("body");
let btn = document.querySelector("button");
let whiteBG = true;
btn.addEventListener("click", ()=>{
    if (whiteBG) mainBody.style.backgroundColor = "aqua";
    else mainBody.style.backgroundColor = "#fff";
    whiteBG = !whiteBG;
});

//# sourceMappingURL=index.377278e2.js.map
