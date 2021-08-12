function joining() {
  let name = prompt("What is your preferred name?");
  let email = prompt("What's your email address?");

  let h2 = document.querySelector("h2");
  h2.innerHTML = "Welcome " + name + ", thanks for joining!";
}

let signupButton = document.querySelector(".joinNow");

signupButton.addEventListener("click", joining);
