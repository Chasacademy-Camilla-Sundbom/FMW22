async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
populate();
/*let companies = [
  {
    name: "Big Corporation",
    numberOfEmployees: 10000,
    ceo: "Camilla Sundbom",
    rating: 3.6,
  },
  {
    name: "Small Startup",
    numberOfEmployees: 3,
    ceo: null,
    rating: 4.3,
  },
];
console.log(companies);*/

/*function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}*/

/*const person = {
  firstName: "Camilla",
  SureName: "Sundbom",
  age: 38,
  eyeColor: "blue",
};
document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " yeras old.";*/

/*let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;
function myFunction(a, b) {
  return a * b;
}*/

/*function myfunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("demo").innerHTML = myfunction(4, 3);*/

/*let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;*/

//denna deklareras med const nyckelord och är konstanta, kan ej ändras
/*const price1 = 5;
const price2 = 6;
let total = price1 + price2;// nyckelord//
document.getElementById("demo").innerHTML = "The total is: " + total;*/

//denna deklareas med en let nyckelord och kan ändras//
/*let x = 5;
let y = 6;
let z = x + y;//nyckelord//

document.getElementById("demo").innerHTML = "The value of z is: " + z;*/

/*function myfunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}*/
