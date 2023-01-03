import { menu } from "./menu.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

let theme = "light",
  dayToday = 0,
  dailyMenu = 0;

const window = {
  menu: document.querySelector(".menu"),
  food: document.querySelectorAll(".food"),
  meatOption: document.querySelectorAll(".selectopt"),
  meatSelect: document.querySelector('input[name="test"]:checked').value,
  root: document.querySelector(":root"),
  showNomeat: document.querySelector(".showNomeat"),
  showAll: document.querySelector(".showAll"),
};

document.body.onload = function () {
  createMenu();
  update();
};

window.showNomeat.addEventListener("click", function () {
  sortMenu("n/a");
});

window.meatOption.forEach((input) =>
  input.addEventListener("click", function () {
    if (this.value == "all") {
      createMenu();
    } else {
      sortMenu(this.value);
    }
  })
);

window.showAll.addEventListener("click", function () {
  deals("buttonPress");
});

function update() {
  console.log("running");
  let date = new Date();
  if (dayToday != date.getDay()) {
    dayToday = date.getDay();
    dailyMenu = menu.filter((item) => item.days.includes(dayToday));
    createDayMenu();
  }
}
function deals(change) {
  if (change == "buttonPress") {
    if (window.showAll.innerHTML == "complete menu") {
      window.showAll.innerHTML = "half price!";
      createMenu();
    } else {
      window.showAll.innerHTML = "complete menu";
      createDayMenu();
    }
  } else {
    createDayMenu();
  }
}

function createDayMenu() {
  console.log(1);

  window.menu.replaceChildren();
  dailyMenu.forEach((item) => {
    window.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="food ${item.theme}">
        <p1 class="name">${item.dish}</p1>
        <p2 class="description">${item.description}</p2>
        <strike>$${item.price}</strike>
        <p3 class="price">$ ${item.price / 2}</p3>
        <img src="${item.image}" class="foodImg">`
    );
  });
}

function createMenu() {
  window.menu.replaceChildren();

  menu.forEach((item) => {
    window.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="food ${theme}">
        <p1 class="name">${item.dish}</p1>
        <p2 class="description">${item.description}</p2>
        <p3 class="price">$${item.price}</p3>
        <img src="${item.image}" class="foodImg">`
    );
  });
}

function sortMenu(meatType) {
  let sortedMenu = menu.filter((meat) => meat.meat.includes(meatType));

  window.menu.replaceChildren();
  sortedMenu.forEach((food) => {
    window.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="food" ${food.theme}>
        <p1 class="name">${food.dish}</p1>
        <p2 class="description">${food.description}</p2>
        <p3 class="price">$${food.price}</p3>
        <img src="${food.image}" class="foodImg">`
    );
  });
}
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});