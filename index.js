function myFunction() {
  // fetching the checkbox by id
  var doc = document.getElementById("check");

  // changing the state of checkbox to checked
  doc.checked = true;
}

function updateHeading(newHeading) {
  let heading = document.querySelector("h2");
  heading.innerHTML = newHeading;
}

function joining() {
  let name = prompt("What's your name?");
  let email = prompt("Your email address?");
  let age = prompt("How old are you?");

  if (age >= 21) {
    updateHeading(
      `Welcome ${name}, don't forget to checkout our Signiture Cocktails section!`);
  } else {
    updateHeading(`Welcome ${name}, thanks for joining!`);
  }
}

let signupButton = document.querySelector(".joinNow");

signupButton.addEventListener("click", joining);
