function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function rgbToHex(rgb) {
  const [r, g, b] = rgb.match(/\d+/g);

  const hexR = parseInt(r).toString(16).padStart(2, "0");
  const hexG = parseInt(g).toString(16).padStart(2, "0");
  const hexB = parseInt(b).toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}

const rgbValue = "rgb(255, 0, 128)";
const hexValue = rgbToHex(rgbValue);
console.log(hexValue);

const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.body;
const titleColorEl = document.querySelector(".color");
changeColorBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor();
  titleColorEl.textContent = `- ${rgbToHex(bodyEl.style.backgroundColor)}`;
});
