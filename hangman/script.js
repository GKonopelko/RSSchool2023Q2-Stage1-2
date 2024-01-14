function generateContent() {
  let div = document.createElement("div");
  div.className = "container";
  document.body.append(div);
  let div1 = document.createElement("div");
  div1.className = "img-block";
  div.prepend(div1);
  let div2 = document.createElement("div");
  div2.className = "text-block";
  div.append(div2);
  div1.insertAdjacentHTML(
    "beforeend",
    `<h1>Виселица</h1>
  <img id='hangman' src="images/hangman-0.svg" alt="">`
  );
  div2.insertAdjacentHTML(
    "beforeend",
    `<p id="underscore" class="underscore">Верный ответ</p>
    <p>Угадай название животного</p>
    <p class="incorrect">Неверных ответов: <span id='mistakes'>0</span> из <span id='answers'></span></p>
    <div id="keyboard" class="keyboard"></div>
    <button class="reset-btn" id='reset'>Новая игра</button>`
  );
}

generateContent();

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

