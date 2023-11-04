document.body.addEventListener("click", handlerClick); // add click event to body

function handlerClick(event) {
  if (!event.target.classList.contains("button")) return; // check where was the click

  const atr = event.target.getAttribute("data-target"); // check what the attribute has that element
  const element = document.querySelector(`#` + atr); // find and save id with atribute

  if (element) element.classList.toggle("hidden"); // change of class
}
