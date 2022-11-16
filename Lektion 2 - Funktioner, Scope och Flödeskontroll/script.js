//
function addOne(num) {
  return num + 1;
}

const result = addOne(5);
console.log(result);

//uppgift skriv en funktion som ta en sträng som input och ger tillbaka sjunde bokstaven som resultat. spara resultatet i en variabel och logga variabeln.
//ledtråd: charAt
function getSeventhChar(word) {
  return word.charAt(6);
}

const seventhChar = getSeventhChar("Hello World");
console.log(seventhChar);

//Flow controll
const myNum = 11; //global scop då den är utanför en function, man kan läsa den från alla ställen

function multiplyBy10(num) {
  debugger;
  //function scope
  const otherNumber = 5;

  return num * 10 + myNum + otherNumber;
}
function greaterThan100(num) {
  return num > 100;
}

function shouldReturn10(isTrue) {
  if (isTrue) {
    return 10;
  }
}

for (let i = 0; i < 10; i++) {
  const myNum = 10;
}

//console.log("Other number:", otherNumber);
const result1 = multiplyBy10(myNum);
const result2 = greaterThan100(result1);
const result3 = shouldReturn10(result2);
console.log(result3);

//Scope
