const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
let answer = 0;
let answers = 6;
let checked = [];
let solution = null;
let fault = 0;

const animals = [
  "лиса",
  "медведь",
  "попугай",
  "крокодил",
  "аллигатор",
  "корова",
  "черепаха",
  "волк",
  "собака",
  "опоссум",
  "бобер",
  "муравьед",
  "слон",
  "гипопотам",
  "таракан",
  "олень",
  "лось",
  "белка",
  "рысь",
  "выпь",
  "тигр",
  "анаконда",
];

function generateContent() {
  div.className = "container";
  document.body.append(div);
  div1.className = "img-block";
  div.prepend(div1);
  div2.className = "text-block";
  div.append(div2);
  div1.insertAdjacentHTML(
    "beforeend",
    `<h1>Виселица</h1>
  <img id='hangman' src="images/hangman-0.svg" alt="">
  <p id="result" class="result"></p>
  `
  );
  div2.insertAdjacentHTML(
    "beforeend",
    `<p id="underscore" class="underscore">Верный ответ</p>
    <p>Угадай название животного</p>
    <p class="incorrect">Неверных ответов: <span id='fault'>0</span> из <span id='answers'></span></p>
    <div id="keyboard" class="keyboard"></div>
    <button class="reset-btn" id='reset'>Новая игра</button>`
  );
}
generateContent();

function generateKeys() {
  let keyButtons = "абвгдежзиклмнопрстуфхцчшщьэюя"
    .split("")
    .map(
      (key) =>
        `<button class="btn" id='` + key +
        `'onClick="checkKey('` + key + `')">` + key +`
      </button>`
    )
    .join("");
  document.querySelector("#keyboard").innerHTML = keyButtons;
}

function chooseItem() {
  answer = animals[Math.floor(Math.random() * animals.length)];
}


function checkKey(chosenkey) {
  checked.indexOf(chosenkey) === -1 ? checked.push(chosenkey) : null;
  document.querySelector('#' + chosenkey).setAttribute("disabled", true);
  if (answer.indexOf(chosenkey) >= 0) {
    checkedWord();
    isOver();
  } else if (answer.indexOf(chosenkey) === -1) {
    fault +=1;
    updateFault();
    isLost();
    nextImg();
  }
}

function nextImg() {
  document.querySelector("#hangman").src = `images/hangman-${fault}.svg`;
}

function isOver() {
  if (solution === answer) {
    document.querySelector("#keyboard").innerHTML = "Вы выйграли!";
    document.querySelector("#keyboard").insertAdjacentHTML("beforeend",
    `<div class="pop" id='pop'></div>`
    );
  }
}

function isLost() {
  if (fault === answers) {
    document.querySelector("#underscore").innerHTML = "Верный ответ: " + answer;
    document.querySelector("#result").innerHTML = "Вы не угадали :(";
    generateKeys()
  }
}

function checkedWord() {
  solution = answer
    .split("")
    .map((key) => (checked.indexOf(key) >= 0 ? key : " _ "))
    .join("");
  document.querySelector("#underscore").innerHTML = solution;
}

function updateFault() {
  document.querySelector("#fault").innerHTML = fault;
}

function reset() {
  fault = 0;
  checked = [];
  document.querySelector("#hangman").src = `images/hangman-0.svg`;
  updateFault();
  generateKeys();
  chooseItem();
  checkedWord();
}

document.querySelector("#answers").innerHTML = answers;
chooseItem();
generateKeys();
checkedWord();

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);
