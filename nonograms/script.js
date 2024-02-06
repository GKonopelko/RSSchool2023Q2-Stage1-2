let modelObj = {
  // 0: [
  //   [false, false, false, false, false],
  //   [false, false, false, false, false],
  //   [false, false, false, false, false],
  //   [false, false, false, false, false],
  //   [false, false, false, true, true],
  // ],
  0: [
    [true, true, true, true, true],
    [false, false, false, true, false],
    [false, false, true, false, false],
    [false, true, false, false, false],
    [true, true, true, true, true],
  ],
  1: [
    [true, true, true, true, false],
    [true, false, false, true, false],
    [true, true, true, true, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
  ],
  2: [
    [true, false, false, false, false],
    [true, false, false, false, false],
    [true, true, true, true, false],
    [true, false, false, true, false],
    [true, true, true, true, false],
  ],
  3: [
    [false, true, true, true, false],
    [true, true, false, true, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
    [false, true, false, false, false],
  ],

  4: [
    [false, true, true, true, true],
    [false, false, false, false, true],
    [false, true, true, true, true],
    [false, true, false, false, true],
    [false, true, true, true, true],
  ],
};

let sec;

let lsCurrentModel = JSON.parse(localStorage.getItem("lsCurrentModel"));
console.log(lsCurrentModel);

let currentModel;
lsCurrentModel ? (currentModel = lsCurrentModel) : (currentModel = modelObj[0]);
console.log(currentModel);

function choseModel(modelNumber) {
  currentModel = modelObj[modelNumber];
  console.log(currentModel);
  localStorage.setItem("lsCurrentModel", JSON.stringify(currentModel));
  location.reload();
}

const tableHeight = currentModel.length;
console.log(currentModel);
const tableWidth = currentModel[0].length;
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
      fig.addEventListener('contextmenu', (event) => {
        // if (event.button == 2) {
          fig.classList.toggle("marked");
          event.preventDefault();
        // }
      })
    }
    gameBoard.appendChild(tableRow);
  }
}

function generateNum() {
  let columnValue = [];

  for (let i in currentModel) {
    let frm = titleNumbers(currentModel[i]);
    rowsFilling[i] = frm;
  }

  for (let col = 0; col < tableWidth; col += 1) {
    let column = [];
    for (let row = 0; row < tableHeight; row += 1) {
      column.push(currentModel[row][col]);
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
  startTimer();
  checkModel();
}

generateNum();
generateContent();

function generateTemplate() {
  const template = document.createElement("div");
  template.innerHTML = `Chose a template: `;
  template.setAttribute("class", "template");
  template.setAttribute("id", "template");
  document.querySelector("h1").after(template);

  const timer = document.createElement("div");
  timer.setAttribute("id", "timer");
  document.querySelector("#template").after(timer);

  for (let i = 0; i < 5; i += 1) {
    const templateBtn = document.createElement("button");
    templateBtn.setAttribute("id", `template${i}`);
    template.append(templateBtn);
    document.querySelector(`#template${i}`).addEventListener("click", () => {
      console.log(i);
      choseModel(i);
    });
  }
  console.log(currentModel);
  const template0 = (document.querySelector("#template0").innerHTML = `z`);
  const template1 = (document.querySelector("#template1").innerHTML = `e`);
  const template2 = (document.querySelector("#template2").innerHTML = `b`);
  const template3 = (document.querySelector("#template3").innerHTML = `r`);
  const template4 = (document.querySelector("#template4").innerHTML = `a`);
}

generateTemplate();

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
  if (JSON.stringify(currentModel) == JSON.stringify(table)) {
    document.querySelector(
      "#dialog"
    ).innerHTML = `"Great! You have solved the nonogram in ${
      60 - sec
    } seconds!"`;
    dialog.setAttribute("open", "");
    isModalOpen = true;
    clearInterval(timerId);
  }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
});

timerWorking = false;
let timerId;

function startTimer() {
  let currentTime = 60;
  if (timerWorking) {
    return console.log(currentTime);
  }
  timerId = setInterval(function () {
    min = Math.floor(currentTime / 60);
    sec = Math.floor(currentTime % 60);
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    document.querySelector("#timer").innerHTML = `Time left ${min}:${sec}`;
    if (currentTime == 0) {
      document.querySelector(
        "#dialog"
      ).innerHTML = `Sorry! No time left. Try again!`;
      dialog.setAttribute("open", "");
      clearInterval(timerId);
      isModalOpen = true;
    }
    currentTime--;
  }, 1000);
  timerWorking = true;
  return sec;
}

