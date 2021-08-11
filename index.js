function checklist() {
  let li = document.querySelector(".checklist");
  li.innerhtml = "Got It!";
}

let doneButton = document.querySelector(".checklist");

doneButton.addEventListener("click", checklist);
