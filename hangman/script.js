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
  {
    quest: "Животное с хвостом",
    answ: "лиса",
  },
  {
    quest: "Любит мед",
    answ: "медведь",
  },
  {
    quest: "Птица Флинта",
    answ: "попугай",
  },
  {
    quest: "Он с Кокошей и Тотошей",
    answ: "крокодил",
  },
  {
    quest: "Львенок и ",
    answ: "черепаха",
  },
  {
    quest: "зубами щелк",
    answ: "волк",
  },
  {
    quest: "Друг человека",
    answ: "собака",
  },
  {
    quest: "Хитер ",
    answ: "бобер",
  },
  {
    quest: "бегемот",
    answ: "гиппопотам",
  },
  {
    quest: "Рыжий и усатый",
    answ: "таракан",
  },
  {
    quest: "цокотуха",
    answ: "муха",
  },
  {
    quest: "Вдруг откуда то летит маленький",
    answ: "комарик",
  },
  {
    quest: "Рано-рано два",
    answ: "барана",
  },
  {
    quest: "А потом позвонила",
    answ: "свинья",
  },
  {
    quest: "Вчера проглотил он морского",
    answ: "ежа",
  },
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
    <p id="hint">Угадай название животного</p>
    <p class="incorrect">Неверных ответов: <span id='fault'>0</span> из <span id='answers'></span></p>
    <div id="keyboard" class="keyboard"></div>
    <button class="reset-btn" id='reset'>Новая игра</button>`
  );
}
generateContent();

let hint = document.querySelector("#hint");

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
  hint.innerHTML = answer.quest;
  console.log(answer.answ);
}

function checkKey(chosenkey) {
  checked.indexOf(chosenkey) === -1 ? checked.push(chosenkey) : null;
  document.querySelector("#" + chosenkey).setAttribute("disabled", true);
  if (answer.answ.indexOf(chosenkey) >= 0) {
    checkedWord();
    isOver();
  } else if (answer.answ.indexOf(chosenkey) === -1) {
    fault += 1;
    updateFault();
    isLost();
    nextImg();
  }
}

document.addEventListener("keydown", function (event) {
  let letter = event.key;
  if (letter.length === 1 && letter.match(/[А-Я]/i)) {
    checkKey(event.key);
  }
});

function nextImg() {
  document.querySelector("#hangman").src = `images/hangman-${fault}.svg`;
}

function isOver() {
  if (solution === answer.answ) {
    document.querySelector("#underscore").innerHTML =
      "Верный ответ: " + answer.answ;
    document.querySelector("#keyboard").innerHTML = "Вы выйграли!";
    showModal();
  }
}

function isLost() {
  if (fault === answers) {
    document.querySelector("#underscore").innerHTML =
      "Верный ответ: " + answer.answ;
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
  solution = answer.answ
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
