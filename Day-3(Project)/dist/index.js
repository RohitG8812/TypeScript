"use strict";
const api = "https://api.github.com/users";
let form = document.getElementById("form");
let input = document.getElementById("inputBox");
let button = document.getElementById("btn");
let sectionBottom = document.getElementById("sectionBottom");
let apiData = [];
const handleFormSubmit = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
};
handleFormSubmit();
input?.addEventListener("input", (e) => {
    let target = e.target;
    let inputValue = target.value;
    console.log(inputValue);
    let filteredData = apiData.filter((data) => data.login.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1);
    displayData(filteredData);
    console.log(filteredData);
});
const dataFetch = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((data) => {
        apiData = data;
        displayData(data);
        console.log(apiData);
    })
        .catch((error) => {
        console.log(error);
    });
};
dataFetch(api);
// let notFoundDiv = document.createElement
let pp = document.createElement("p");
pp.innerHTML = "Not Found";
const displayData = (data) => {
    sectionBottom.innerHTML = "";
    data.length > 0
        ? data.forEach((item) => {
            let div = document.createElement("div");
            let namePara = document.createElement("p");
            let imgSec = document.createElement("img");
            imgSec.classList.add("profileImage");
            div.classList.add("cardDiv");
            namePara.classList.add("name");
            sectionBottom.appendChild(div);
            namePara.innerText = item.login;
            imgSec.src = item.avatar_url;
            div.appendChild(imgSec);
            div.appendChild(namePara);
            div.addEventListener("click", () => {
                window.open(item.html_url, "_blank");
            });
        })
        : sectionBottom.appendChild(pp);
};
// displayData(apiData);
