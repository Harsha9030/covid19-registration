function formtoggle() {
  var formelement = document.querySelector(".inputform");
  var modalelement = document.querySelector(".modal");
  formelement.classList.add("active");
  modalelement.classList.add("active");
}

function formremove() {
  var formelement = document.querySelector(".inputform");
  var modalelement = document.querySelector(".modal");
  formelement.classList.remove("active");
  modalelement.classList.remove("active");
}
