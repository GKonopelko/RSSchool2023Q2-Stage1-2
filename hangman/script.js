const div = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");

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
  "гиппопотам",
  "таракан",
  "олень",
  "лось",
  "белка",
  "рысь",
  "выпь",
  "тигр",
  "анаконда",
  "жираф",
  "енот",
  "песец",
];

function generateContent() {
  div.className = "container";
  document.body.append(div);
  div1.className = "img-block";
  div.prepend(div1);
  div2.className = "text-block";
  div.append(div2);
  document.body.prepend(div3);
  div3.setAttribute("class", "modal__backgr hidden");
  div3.setAttribute("id", "backgr");
  document.body.prepend(div4);
  div4.className = "modal hidden";
  div4.setAttribute("id", "modal");
  div4.insertAdjacentHTML(
    "beforeend",
    `<div class="modal__text" id = "modalText">
    </div>`
  );

  div1.insertAdjacentHTML(
    "beforeend",
    `<img id='hangman' src="images/hangman-0.svg" alt="">
  <p id="result" class="result"></p>
  <h3>Виселица</h1>
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
        `<button class="btn" id='` +
        key +
        `'onClick="checkKey('` +
        key +
        `')">` +
        key +
        `
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
  document.querySelector("#" + chosenkey).setAttribute("disabled", true);
  if (answer.indexOf(chosenkey) >= 0) {
    checkedWord();
    isOver();
  } else if (answer.indexOf(chosenkey) === -1) {
    fault += 1;
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
    document.querySelector("#underscore").innerHTML = "Верный ответ: " + answer;
    document.querySelector("#keyboard").innerHTML = "Вы выйграли!";
    showModal();
  }
}

function isLost() {
  if (fault === answers) {
    document.querySelector("#underscore").innerHTML = "Верный ответ: " + answer;
    document.querySelector("#keyboard").innerHTML = "Вы не угадали :(";
    showModal();
  }
}

let underscore = document.querySelector("#underscore");
const modalText = document.querySelector("#modalText");
const keyboard = document.querySelector("#keyboard");
const resetBtn = document.querySelector("#reset");

function showModal() {
  modal.classList.add("show");
  modal.classList.remove("hidden");
  backgr.classList.remove("hidden");
  modalText.append(underscore, keyboard, resetBtn);
  backgr.addEventListener("click", hideModal);
}

function hideModal() {
  modal.classList.remove("show");
  modal.classList.add("hidden");
  backgr.classList.add("hidden");
  div2.append(keyboard, resetBtn);
  div2.prepend(underscore);

  fault = 0;
  checked = [];
  document.querySelector("#hangman").src = `images/hangman-0.svg`;
  updateFault();
  generateKeys();
  chooseItem();
  checkedWord();
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
  modal.classList.remove("show");
  modal.classList.add("hidden");
  backgr.classList.add("hidden");
  div2.append(keyboard, resetBtn);
  div2.prepend(underscore);
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

resetBtn.addEventListener("click", reset);
