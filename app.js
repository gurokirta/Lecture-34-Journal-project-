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

  const inputOne = document.getElementById("container-1");
  inputOne.classList.add("red");
  const inputTwo = document.getElementById("container-2");
  inputTwo.classList.add("red");
  const inputThree = document.getElementById("container-3");
  inputThree.classList.add("red");
  const inputFour = document.getElementById("container-4");
  inputFour.classList.add("red");
  const inputFive = document.getElementById("container-5");
  inputFive.classList.add("red");
  const inputSix = document.getElementById("container-6");
  inputSix.classList.add("red");
  const inputSeven = document.getElementById("container-7");
  inputSeven.classList.add("red");
  const inputEight = document.getElementById("container-8");
  inputEight.classList.add("red");
  const inputNine = document.getElementById("container-9");
  inputNine.classList.add("red");
  const inputTen = document.getElementById("container-10");
  inputTen.classList.add("red");
  inputOne.addEventListener("click", () => {
    inputOne.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputOne.innerHTML < 0 ||
      inputOne.innerHTML > 5 ||
      isNaN(inputOne.innerHTML)
    ) {
      inputOne.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputTwo.addEventListener("click", () => {
    inputTwo.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputTwo.innerHTML < 0 ||
      inputTwo.innerHTML > 5 ||
      isNaN(inputTwo.innerHTML)
    ) {
      inputTwo.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputThree.addEventListener("click", () => {
    inputThree.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputThree.innerHTML < 0 ||
      inputThree.innerHTML > 5 ||
      isNaN(inputThree.innerHTML)
    ) {
      inputThree.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputFour.addEventListener("click", () => {
    inputFour.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputFour.innerHTML < 0 ||
      inputFour.innerHTML > 5 ||
      isNaN(inputFour.innerHTML)
    ) {
      inputFour.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputFive.addEventListener("click", () => {
    inputFive.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputFive.innerHTML < 0 ||
      inputFive.innerHTML > 5 ||
      isNaN(inputFive.innerHTML)
    ) {
      inputFive.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputSix.addEventListener("click", () => {
    inputSix.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputSix.innerHTML < 0 ||
      inputSix.innerHTML > 5 ||
      isNaN(inputSix.innerHTML)
    ) {
      inputSix.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputSeven.addEventListener("click", () => {
    inputSeven.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputSeven.innerHTML < 0 ||
      inputSeven.innerHTML > 5 ||
      isNaN(inputSeven.innerHTML)
    ) {
      inputTwo.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputEight.addEventListener("click", () => {
    inputEight.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputEight.innerHTML < 0 ||
      inputEight.innerHTML > 5 ||
      isNaN(inputEight.innerHTML)
    ) {
      inputEight.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputNine.addEventListener("click", () => {
    inputNine.innerHTML = Number(prompt("Input number between 0-5"));
    while (
      inputNine.innerHTML < 0 ||
      inputNine.innerHTML > 5 ||
      isNaN(inputNine.innerHTML)
    ) {
      inputNine.innerHTML = prompt("Input number between 0-5");
    }
  });
  inputTen.addEventListener("click", () => {
    inputTen.innerHTML = prompt("Input number between 0-5");
    while (
      inputTen.innerHTML < 0 ||
      inputTen.innerHTML > 5 ||
      isNaN(inputTen.innerHTML)
    ) {
      inputTen.innerHTML = prompt("Input number between 0-5");
    }
  });
  if (inputTen.innerHTML > 0 || inputTen.innerHTML < 5) {
    inputTen.classList.add("green");
  } else {
    inputTen.classList.add("red");
  }
});

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
