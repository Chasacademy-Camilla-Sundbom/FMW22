const dogInfo = document.getElementById("dogInfo");
const dogPic = document.getElementById("dogPic");

// Använd inte VAR! Förlegat koncept

var ettNamnTill = "En pryl";

// const måste alltid ges ett värde när den skapas

const anotherName = "Håkan";

// en let kan skapas utan värde

let aThirdName;

aThirdName = "Kirus";

const dogName = "Håkan";
const age = 12;
const age2 = 10;
const color = "svart";
let isTired = true;
const interests = ["Mat", "Bollar", "Godis", "Sova", "Mat"];

const sum = age + age2;

let counter = 2;

console.log(dogName);
console.log(age);

if (isTired === true) {
  console.log("Håkan är trött");
} else {
  console.log("Håkan är pigg");
}

// Du kan ha 1 if, en else, men hur många else if som helst

if (color === "svart") {
  dogInfo.innerHTML = "Hunden har en mörk färg";
} else if (color === "vit") {
  dogInfo.innerHTML = "Hunden har en ljus färg";
} else {
  dogInfo.innerHTML = "Hunden har en mellanfärg";
}
console.log(interests[counter]);

console.log(sum);

//const newString = dogName + ' ' + 'är en' + ' ' + color + ' ' + 'hund';

const newString = `${dogName} är en ${color} hund`;

console.log(newString);
/* interests.forEach(interest => {
    console.log(interest);
}); */

const dog = {
  dogName: "Håkan",
  picSrc: "hakan.jpg",
  age: 12,
  color: "svart",
  interests: ["Mat", "Bollar", "Godis", "Sova", "Mat"],
  isTired: true,
};

const dog2 = {
  dogName: "Kira",
  picSrc: "kira.JPG",
  age: 10,
  color: "brun",
  interests: ["Mat", "Pinnar", "Godis", "Gosa", "Mat"],
  isTired: true,
};

const dog3 = {
  dogName: "Enzo",
  picSrc: "enzo.JPG",
  age: 4,
  color: "vit",
  interests: ["Mat", "Gömma sig under soffan", "Godis", "Skälla", "Mat"],
  isTired: true,
};

// const dogInfoText = `${dog.dogName} är en ${dog.color} hund som är ${dog.age} år gammal.`

// dogInfo.innerHTML = dogInfoText;

function updateDogInfo(dogObj) {
  const dogInfoHtml = `${dogObj.dogName} är en ${dogObj.color} hund som är ${dogObj.age} år gammal.`;
  dogInfo.innerHTML = dogInfoHtml;
  dogPic.src = dogObj.picSrc;
}

updateDogInfo(dog3);
