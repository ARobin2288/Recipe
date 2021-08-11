function checklist() {
  let check = document.querySelector("h6");
  check.innerhtml = "X";

  alert("got it!");
}

let doneButton = document.querySelector(".checklist");

doneButton.addEventListener("click", checklist);
