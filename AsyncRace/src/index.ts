import "./styles.css";

const baseUrl = "http://127.0.0.1:3000";

const path = {
  garage: "/garage",
  winners: "/winners",
};

const pageHTML = async () => {
  const pageHtml = `
  <header class="header">
  <div class="container">
    <button class="garage-view_btn">TO GARAGE</button>
    <button class="winners-view_btn">TO WINNERS</button>
  </div>
</header>
<div class="garage-view">
  <div class="fields">
    <div class="create">
      <input class="create-text make-car" type="text" autocomplete>
      <input class="chose-color make-car" type="color">
      <button class="create-btn">CREATE</button>
    </div>
    <div class="update">
      <input class="create-text update-car" type="text" autocomplete disabled="true">
      <input class="create-color update-car" type="color" disabled="true">
      <button class="update-btn" disabled="true">UPDATE</button>
    </div>
  </div>
  <div class="controls">
      <button class="race-btn">RACE</button>
      <button class="reset-btn" disabled>RESET</button>
      <button class="generate-btn">GENERATE CARS</button>
  </div>
  <div class="garage">
    <h1 class="title">Garage <span class="garage-pagenmb">()</span></h1>
    <h2 class="page">Page #<span class="pagenmb">1</span></h2>
    <div class="garage-cars"></div>
  </div>
  <div class="pages-btns">
    <button class="prev-btn">PREV</button>
    <button class="next-btn">NEXT</button>
  </div>
</div>
<div class="winners-view hidden">
  <h1 class="title">WINNERS <span class="winners-pagenmb">()</span></h1>
  <h2 class="page">Page #<span class="pagenmb">1</span></h2>
  <div class="winners-table">
  </div>
  <div class="winners-btns">
    <button class="prev-btn">PREV</button>
    <button class="next-btn">NEXT</button>
  </div>
</div>
  `;
  const pageBody = document.createElement("div");
  pageBody.innerHTML = pageHtml;
  document.body.appendChild(pageBody);
};
pageHTML();

const btnGarageView = <HTMLElement>document.querySelector(".garage-view_btn");
const btnWinnersView = <HTMLElement>document.querySelector(".winners-view_btn");
const garageView = <HTMLElement>document.querySelector(".garage-view");
const winnersView = <HTMLElement>document.querySelector(".winners-view");

btnGarageView.addEventListener("click", () => {
  winnersView.classList.add("hidden");
  garageView.classList.remove("hidden");
});

btnWinnersView.addEventListener("click", () => {
  garageView.classList.add("hidden");
  winnersView.classList.remove("hidden");
});
