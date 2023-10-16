const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняє перезавантаження сторінки під час відправлення форми

  const formData = new FormData(loginForm);

  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (userData.email.trim() === "" || userData.password.trim() === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    console.log(userData); // Виведення об'єкта в консоль
    loginForm.reset(); // Очищення полів форми
  }
});
