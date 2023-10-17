// const fontSizeControl = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// // Устанавливаем начальный фонт-сайз спана
// text.style.fontSize = `${fontSizeControl.value}px`;

const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSize;
});

textSpan.style.fontSize = fontSizeControl.value + "px";
