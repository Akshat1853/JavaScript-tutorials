let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // clear previous errors
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";

  // email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // password regex
  // min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

  let emailans = emailRegex.test(email.value);
  let passwordans = passwordRegex.test(password.value);

  let isValid = true;

  // email validation
  if (!emailans) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
    isValid = false;
  }

  // password validation
  if (!passwordans) {
    document.querySelector("#passwordError").textContent =
      "Password must contain uppercase, lowercase, number and special character (min 8)";
    document.querySelector("#passwordError").style.display = "initial";
    isValid = false;
  }

  // success message
  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Everything is correct";
  }
});
