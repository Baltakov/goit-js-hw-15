const inputRef = document.querySelector("#controls input");
const createButtonRef = document.querySelector("[data-create]");
const destroyButtonRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputRef.value;
  const baseSize = 30;
  let boxes = "";

  for (let i = 0; i < amount; i += 1) {
    const size = baseSize + i * 10;
    const randomColor = getRandomHexColor();

    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${randomColor}"></div>`;
    boxes += box;
  }

  boxesRef.innerHTML = boxes;
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
