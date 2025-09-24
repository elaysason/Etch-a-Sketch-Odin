const flexConatiner = document.querySelector(".flex-container");

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  while (flexConatiner.firstChild) {
    flexConatiner.removeChild(flexConatiner.firstChild);
  }
  for (let i = 0; i < size * size; i++) {
    let squere_div = document.createElement("div");
    squere_div.style.opacity = "0.0";
    squere_div.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(squere_div.style.opacity);
      if (currentOpacity < 1) {
        let newOpacity = Math.min(currentOpacity + 0.1, 1);
        squere_div.style.opacity = newOpacity.toString();
      }
    });
    squere_div.style.backgroundColor = getRandomRGB();
    let squareSize = 960 / size;
    squere_div.style.width = `${squareSize}px`;
    squere_div.style.height = `${squareSize}px`;
    console.log(squere_div.style.width);
    flexConatiner.appendChild(squere_div);
  }
}
createGrid(16);
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let userRow = prompt("Enter number of rows (max 100):");
  if (userRow <= 100) {
    createGrid(userRow);
  } else {
    alert("Number must be less than or equal to 100");
    createGrid(16);
  }
});
