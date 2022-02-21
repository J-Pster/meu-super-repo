// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener("click", (origem) => {
  origem.preventDefault();
});

INPUT_CHECKBOX.addEventListener("click", (origem) => {
  origem.preventDefault();
});

INPUT_TEXT.addEventListener("keypress", (origem) => {
  if(origem.keyCode !== 97) origem.preventDefault();
});