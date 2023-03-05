"use strict";

const pointBox = document.getElementById("point__box");

const contentBoxSection = document.getElementById("content__box__section");
const addButton = document.getElementById("add__button");
const removeButton = document.getElementById("remove__button");
const studentList = document.querySelectorAll(".student");
const studentArr = [...studentList];

let divTwo = document.createElement("div");

addButton.addEventListener("click", () => {
  let date = addNewDate();

  let i = 0;

  const div = document.createElement("div");

  studentArr.forEach((_, idx) => {
    divTwo = document.createElement("div");
    divTwo.classList.add("box");
    divTwo.setAttribute("id", `container-${i}`);
    divTwo.classList.add(`${i}`);
    div.classList.add("info__box");
    i++;

    for (let i = 1; i <= studentArr.length; i++) {
      divTwo.innerHTML = "0.00";
    }
    if (idx === 0) {
      divTwo.innerHTML = date;
    }

    div.appendChild(divTwo);
  });

  contentBoxSection.append(div);
});

removeButton.addEventListener("click", () => {
  const lastChild = contentBoxSection.lastElementChild;
  if (lastChild && !lastChild.classList.contains("labels")) {
    contentBoxSection.removeChild(lastChild);
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
