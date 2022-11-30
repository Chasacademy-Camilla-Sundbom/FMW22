// DOM Document Object Model

//CRUD - Create Read Update Delete

//Read
//getElementById
//getElementByClassName
// querySelector
const gBall = document.getElementById("g");
console.log(gBall);

//uppgift använd getElementByClassName
const headingTag = document.getElementsByClassName("heading");
console.log(headingTag);

const ballTags = document.getElementsByClassName("ball");
console.log(ballTags);

const gBall2 = document.querySelector("#g");
console.log(gBall2);

const blueBalls = document.querySelectorAll(".ball.blue");
console.log(blueBalls);

//Uppdate
blueBalls.forEach((div) => {
  div.innerHTML = `<h1>${div.textContent}</h1>`;
});

// Uppgift: Ändra alla görna bollar med h2

const greenBalls = document.querySelectorAll(".ball.green");

greenBalls.forEach((div) => {
  div.innerHTML = `<h2>${div.textContent}</h2>`;
});

//Creat end Delete
const element = document.createElement("div");
//<div class="ball red" >1</div>
element.setAttribute("class", "ball red");
element.textContent = "1";

const col2 = document.querySelector("#col2");
//col2.appendChild(element);

const iDiv = document.querySelector("#i");
col2.insertBefore(element, iDiv);

// Uppgift: Lägg en blå boll med en"2" innan D-bollen
const element2 = document.createElement("div");
//<div class="ball blue" >2</div>
element2.setAttribute("class", "ball blue");
element2.textContent = "2";

const col1 = document.querySelector("#col1");
const dDiv = document.querySelector("#dDiv");

col1.insertBefore(node, dDiv);

//Delete
col1.removeChild(element2);
