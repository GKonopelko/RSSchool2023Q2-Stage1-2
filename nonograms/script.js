let model = [
  [false, false, false],
  [false, false, false],
  [false, false, true],
];

const tableHeight = model.length;
const tableWidth = model[0].length;
const table = [...Array(tableHeight)].map((element) =>
  Array(tableWidth).fill(false)
);
const rowsFilling = new Array(tableHeight);
const columnsFilling = new Array(tableWidth);

function generateContent() {
  document.body.setAttribute("class", "body");

  const title = document.createElement("h1");
  title.innerHTML = `Nonogram game`;
  document.body.append(title);

  const tableTag = document.createElement("table");
  tableTag.innerHTML = `Table`;
  tableTag.setAttribute("class", "table");
  tableTag.setAttribute("id", "game-board");
  document.body.append(tableTag);  

  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = `Reset game`;
  resetBtn.setAttribute("id", "reset");
  document.body.append(resetBtn);

  const modalWind = document.createElement("dialog");
  modalWind.innerHTML = `Great! You have solved the nonogram!`;
  modalWind.setAttribute("id", "dialog");
  // modalWind.setAttribute("open","open");
  document.body.append(modalWind);

  const gameBoard = document.querySelector("#game-board");
  const titleRow = document.createElement("tr");
  titleRow.appendChild(document.createElement("th"));
  for (let col = 0; col < tableWidth; col += 1) {
    columnNum = document.createElement("th");
    columnNum.innerHTML = `0`;
    titleRow.appendChild(columnNum);
  }
  gameBoard.appendChild(titleRow);
  
  for (let row = 0; row < tableHeight; row += 1) {
    const rowNum = document.createElement("th");
    rowNum.innerHTML = `0`;
    const tableRow = document.createElement("tr");
    tableRow.appendChild(rowNum);
    for (let col = 0; col < tableWidth; col+= 1) {
      let fig = document.createElement("td");
      fig.innerHTML = `0`;
      tableRow.appendChild(fig);
    }
    gameBoard.appendChild(tableRow);
  };
}
generateContent();






