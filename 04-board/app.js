const board = document.querySelector("#board");

const SQUARES_NUMBER = 400;
// const colors = [
//   "#FFE4C4",
//   "#FF7F50",
//   "#9932CC",
//   "#8FBC8F",
//   "#ADFF2F",
//   "#F08080",
//   "#ADD8E6",
//   "#90EE90",
//   "#87CEFA",
//   "#BA55D3",
//   "#98FB98",
//   "#AFEEEE",
// ];

const colors = [
  "#FFE4C4",
  "#FF7F50",
  "#F08080",
  "#FFC0CB",
  "#DDA0DD",
  "#FA8072",
  "#FFF5EE",
  "#D8BFD8",
  "#EE82EE",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
