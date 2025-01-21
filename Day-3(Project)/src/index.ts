// const api: string = "https://api.github.com/users";
// let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
// let input: HTMLInputElement | null = document.getElementById(
//   "inputBox"
// ) as HTMLInputElement | null;
// let button: HTMLButtonElement = document.getElementById(
//   "btn"
// ) as HTMLButtonElement;
// let sectionBottom: HTMLElement = document.getElementById(
//   "sectionBottom"
// ) as HTMLElement;

// interface Data {
//   login: string;
//   avatar_url: string;
//   html_url: string;
// }

// let apiData: Data[] = [];

// const handleFormSubmit = (): void => {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
// };

// handleFormSubmit();

// input?.addEventListener("input", (e: Event) => {
//   let target = e.target as HTMLInputElement;
//   let inputValue = target.value;
//   console.log(inputValue);
//   let filteredData = apiData.filter(
//     (data) => data.login.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
//   );
//   displayData(filteredData);
//   console.log(filteredData);
// });

// const dataFetch = (api: string) => {
//   return fetch(api)
//     .then((response) => response.json())
//     .then((data) => {
//       apiData = data;
//       displayData(data);
//       console.log(apiData);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// dataFetch(api);
// // let notFoundDiv = document.createElement
// let pp = document.createElement("p");
// pp.innerHTML = "Not Found";
// const displayData = (data: Data[]) => {
//   sectionBottom.innerHTML = "";
//   data.length > 0
//     ? data.forEach((item) => {
//         let div = document.createElement("div");
//         let namePara = document.createElement("p");
//         let imgSec = document.createElement("img");
//         imgSec.classList.add("profileImage");
//         div.classList.add("cardDiv");
//         namePara.classList.add("name");
//         sectionBottom.appendChild(div);
//         namePara.innerText = item.login;
//         imgSec.src = item.avatar_url;

//         div.appendChild(imgSec);
//         div.appendChild(namePara);

//         div.addEventListener("click", () => {
//           window.open(item.html_url, "_blank");
//         });
//       })
//     : sectionBottom.appendChild(pp);
// };

// // displayData(apiData);

const form = document.querySelector("#form") as HTMLFormElement;
const inputText = document.querySelector("#inputBox") as HTMLInputElement;
const bottomSection = document.querySelector(
  "#sectionBottom"
) as HTMLDivElement;

const url: string = "https://api.github.com/users";

interface UserData {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
}

let debouncingTimer: number;

const fetchData = async (url: string): Promise<UserData[]> => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displayData(data);

  inputText.addEventListener("input", (e: Event) => {
    clearTimeout(debouncingTimer);

    debouncingTimer = setTimeout(() => {
      let searchText = inputText.value;
      let filteredData = data.filter(
        (data: UserData) =>
          data.login.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
      console.log(filteredData)
      displayData(filteredData);
    }, 300);
  });

  return data;
};

fetchData(url);

const displayData = (data: UserData[]) => {
  bottomSection.innerHTML = "";
  if (data.length === 0) {
    bottomSection.innerHTML = "No data available";
  }
  data.forEach((user) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    let name = document.createElement("p");
    image.src = user.avatar_url;
    name.innerHTML = user.login;
    card.appendChild(image);
    card.appendChild(name);
    bottomSection.appendChild(card);
    card.addEventListener("click", () => {
      window.open(user.html_url, "_blank");
    });
    //? adding classes to the new element
    card.classList.add("cardDiv");
    image.classList.add("profileImage");
    name.classList.add("name");
  });
};
