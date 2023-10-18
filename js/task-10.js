const inputRef = document.querySelector("#controls input");
const createButtonRef = document.querySelector("[data-create]");
const destroyButtonRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const baseSize = 30;
  let boxes = "";

  for (let i = 0; i < amount; i += 1) {
    const size = baseSize + i * 10;
    const randomColor = getRandomHexColor();

    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${randomColor}"></div>`;
    boxes += box;
  }

  boxesRef.innerHTML = boxes;
};

const destroyBoxes = () => {
  boxesRef.innerHTML = "";
};

createButtonRef.addEventListener("click", (event) => {
  const amount = inputRef.value;
  createBoxes(amount);
});

destroyButtonRef.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
