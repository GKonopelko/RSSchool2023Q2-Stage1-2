const model0 = [
  [true, true, true, true, true],
  [false, false, false, true, false],
  [false, false, true, false, false],
  [false, true, false, false, false],
  [true, true, true, true, true],
];

const model1 = [
  [true, true, true, true, false],
  [true, false, false, true, false],
  [true, true, true, true, false],
  [true, false, false, false, false],
  [true, true, true, true, false],
];

const model2 = [
  [true, false, false, false, false],
  [true, false, false, false, false],
  [true, true, true, true, false],
  [true, false, false, true, false],
  [true, true, true, true, false],
];

const model3 = [
  [false, true, true, true, false],
  [true, true, false, true, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
];

const model4 = [
  [false, true, true, true, true],
  [false, false, false, false, true],
  [false, true, true, true, true],
  [false, true, false, false, true],
  [false, true, true, true, true],
];

let model = model0;
function choseModel(modelNumber) {
model = modelNumber;
      console.log(model);
      generateContent();
      generateNum();
      checkModel();
}


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

  const template = document.createElement("div");
  template.innerHTML = `Chose a template: `;
  template.setAttribute("class", "template");
  template.setAttribute("id", "template");
  document.body.append(template);

  for (let i = 0; i < 5; i += 1) {
    const templateBtn = document.createElement("button");
    templateBtn.setAttribute("id", `template${i}`);
    template.append(templateBtn);
    document.querySelector(`#template${i}`).addEventListener("click", 
    () => {
      choseModel(`template${i}`);
    });
  }
  console.log(model);
  const template0 = (document.querySelector("#template0").innerHTML = `z`);
  const template1 = (document.querySelector("#template1").innerHTML = `e`);
  const template2 = (document.querySelector("#template2").innerHTML = `b`);
  const template3 = (document.querySelector("#template3").innerHTML = `r`);
  const template4 = (document.querySelector("#template4").innerHTML = `a`);

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
    columnNum.innerHTML = columnsFilling[col].join("<br>");
    titleRow.appendChild(columnNum);
  }
  gameBoard.appendChild(titleRow);

  for (let row = 0; row < tableHeight; row += 1) {
    const rowNum = document.createElement("th");
    rowNum.innerHTML = rowsFilling[row].join("&nbsp");
    const tableRow = document.createElement("tr");
    tableRow.appendChild(rowNum);
    for (let col = 0; col < tableWidth; col += 1) {
      let fig = document.createElement("td");
      fig.setAttribute("onclick", "filling(this, " + row + ", " + col + ")");
      tableRow.appendChild(fig);
    }
    gameBoard.appendChild(tableRow);
  }
  return model;
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
  for (let i = 0; i < columnItem.length + 1; i += 1) {
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
  element.classList == "checked"
    ? (table[row][col] = false)
    : (table[row][col] = true);
  element.classList.toggle("checked");
  checkModel();
}

generateNum();
generateContent();

const dialog = document.querySelector("#dialog");
let isModalOpen = false;

dialog.addEventListener("click", () => {
  if (isModalOpen) {
    dialog.removeAttribute("open");
    location.reload();
  }
});

document.addEventListener("click", () => {
  if (isModalOpen) {
    document.addEventListener("click", () => {
      dialog.removeAttribute("open");
      location.reload();
    });
  }
});

function checkModel() {
  if (JSON.stringify(model) == JSON.stringify(table)) {
    dialog.setAttribute("open", "");
    isModalOpen = true;
  }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
});
