"use strict";

const pointBox = document.getElementById("point__box");

const contentBoxSection = document.getElementById("content__box__section");
const addButton = document.getElementById("add__button");
const removeButton = document.getElementById("remove__button");
const studentList = document.querySelectorAll(".student");
const studentArr = [...studentList];
let divTwo = document.createElement("div");

function forEachStudent() {
  const div = document.createElement("div");
  let date = addNewDate();
  let i = 0;
  studentArr.forEach((_, idx) => {
    divTwo = document.createElement("div");
    divTwo.classList.add("box");
    divTwo.setAttribute("id", `container-${i}`);
    divTwo.classList.add(`${i}`);
    div.classList.add("info__box");
    i++;

    for (let i = 1; i <= studentArr.length; i++) {
      divTwo.innerHTML = 0.0;
    }

    if (idx === 0) {
      divTwo.innerHTML = date;
    }

    div.appendChild(divTwo);
  });

  contentBoxSection.append(div);
}

addButton.addEventListener("click", () => {
  forEachStudent();
  addScore();
});

function addScore(input) {
  for (let i = 1; i <= 10; i++) {
    const input = document.getElementById(`container-${i}`);
    input.classList.add("red");
    input.addEventListener("click", () => {
      input.innerHTML = Number(prompt("input number between 0 - 5"));
      while (input.innerHTML < 0 || input.innerHTML > 5) {
        input.innerHTML = prompt("input number between 0 - 5");
      }
      if (
        !isNaN(input.innerHTML) &&
        input.innerHTML >= 0 &&
        input.innerHTML <= 5
      ) {
        input.classList.replace("red", "green");
      } else {
        input.classList.replace("green", "red");
      }
    });
  }
}

removeButton.addEventListener("click", () => {
  const lastChild = contentBoxSection.lastElementChild;
  if (lastChild && !lastChild.classList.contains("labels")) {
    contentBoxSection.removeChild(lastChild);
  }
  if (
    selectedDate.toLocaleDateString("en-US", { weekday: "short" }) === "Mon"
  ) {
    selectedDate.setDate(selectedDate.getDate() - 3);
  } else {
    selectedDate.setDate(selectedDate.getDate() - 2);
  }
});

//!

let selectedDate = new Date("2022-12-02");
function addNewDate() {
  if (
    selectedDate.toLocaleDateString("en-US", { weekday: "short" }) === "Fri"
  ) {
    selectedDate.setDate(selectedDate.getDate() + 3);
  } else {
    selectedDate.setDate(selectedDate.getDate() + 2);
  }
  let date = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return date;
}

const now = new Date();
const day = now.toLocaleString("default", { weekday: "short" });
const date = now.toLocaleString("default", { day: "numeric" });
const formattedDate = ` ${day} ${date}`;
