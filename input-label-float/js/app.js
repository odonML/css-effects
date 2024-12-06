const passwordField = document.getElementById("password");
const togglePassword = document.querySelector("#icon-pass");

togglePassword.classList.add("hidden");

passwordField.addEventListener("input", function () {
  togglePassword.classList.remove("hidden");

  if (passwordField.value === "") {
    togglePassword.classList.add("hidden");
  }
});

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.src = "./img/eye-open-black.svg";
  } else {
    passwordField.type = "password";
    togglePassword.src = "./img/eye-close-black.svg";
  }
});
