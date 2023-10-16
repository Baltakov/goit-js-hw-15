const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;
  const expectedLength = parseInt(inputElement.getAttribute("data-length"), 10);

  if (inputValue.length === expectedLength) {
    inputElement.style.borderColor = "#4caf50"; // Зелений колір для правильної кількості символів
  } else {
    inputElement.style.borderColor = "#f44336"; // Червоний колір для неправильної кількості символів
  }
});
