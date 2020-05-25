"use strict";

const input = document.querySelector(".block__form-input");
const btn = document.querySelector(".block__form-btn");
const blockList = document.querySelector(".block__list");

function createItems(text) {
  const item = document.createElement("li");
  const deleteItem = document.createElement("span");

  deleteItem.className = "block__list-delete";
  deleteItem.textContent = "X";

  item.className = "block__list-item";
  item.textContent = text;
  item.appendChild(deleteItem);

  deleteItem.addEventListener("click", function () {
    blockList.removeChild(item);
  });

  blockList.appendChild(item);
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (!(input.value === "enter: " || input === "")) {
    createItems(input.value);
    input.value = "";
  }
});

input.addEventListener("focus", function () {
  input.value = "";
});

input.addEventListener("blur", function () {
  if (input.value === "") {
    input.value = "enter:";
  }
});
