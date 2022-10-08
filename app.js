const cursorSquare = document.querySelector(".square");
let w = 45;
let h = 45;

window.addEventListener("mousemove", (e) => {
  cursorSquare.style.height = h + "px";
  cursorSquare.style.width = w + "px";

  cursorSquare.classList.add("moving");
  cursorSquare.style.top = e.clientY - h / 2.1 + "px";
  cursorSquare.style.left = e.clientX - w / 2.1 + "px";
});
