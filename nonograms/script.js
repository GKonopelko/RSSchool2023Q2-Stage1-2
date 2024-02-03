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
  // tableTag.innerHTML = `Table`;
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
    columnNum.innerHTML = columnsFilling[col].join("<br>");;
    titleRow.appendChild(columnNum);
  }
  gameBoard.appendChild(titleRow);
  
  for (let row = 0; row < tableHeight; row += 1) {
    const rowNum = document.createElement("th");
    rowNum.innerHTML = rowsFilling[row].join("&nbsp");
    const tableRow = document.createElement("tr");
    tableRow.appendChild(rowNum);
    for (let col = 0; col < tableWidth; col+= 1) {
      let fig = document.createElement("td");
      fig.setAttribute("onclick", "filling(this, " + row + ", " + col + ")");
      tableRow.appendChild(fig);
    }
    gameBoard.appendChild(tableRow);
  };
}

function generateNum() {
  let columnValue = [];

  for (let i in model) {
    let frm = titleNumbers(model[i]);
    rowsFilling[i] = frm;
  }

  for (let col = 0; col < tableWidth; col += 1) {
    let column = [];
    for (let row = 0; row < tableHeight; row += 1) {
      column.push(model[row][col]);
    }
    columnValue.push(column);
  }

  for (let i in columnValue) {
    arr = titleNumbers(columnValue[i]);
    columnsFilling[i] = arr;
  }
}

function titleNumbers(columnItem) {
  let arr = [];
  let iValue = 0;
  for (let i = 0; i < columnItem.length + 1; i+= 1) {
    if (columnItem[i] === true) {
      iValue += 1;
    } else {
      if (iValue !== 0) {
        arr.push(iValue);
        iValue = 0;
    }
    }
  }
  return arr;
}

function filling(element, row, col) {
  element.classList == "checked" ? table[row][col] = false : table[row][col] = true;
  element.classList.toggle("checked")
  checkModel();
}

generateNum();
generateContent();