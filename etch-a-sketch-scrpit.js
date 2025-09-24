const flexConatiner = document.querySelector(".flex-container");
console.log(flexConatiner);

for (let i = 0; i < 256; i++) {
  let squere_div = document.createElement("div");
  squere_div.addEventListener("mouseover", () => {
    squere_div.style.backgroundColor = "orange";
  });
  flexConatiner.appendChild(squere_div);
}
console.log(flexConatiner);
