//Arrayer - byrå med ett nr på varje låda.
//Börjar på 0.
// for-loop- öppna alla lådor från 0 till längden
//av arrayen. Och variabeln i är lådan du öppnar.

//Objekt - Byrå med en sträng på varje låda
// vet man en sträng kan man öppna den lådan.

//const arr = [1, 4, 6, 9, 44, 25];
// Uppgift beräkna summan av talen i arrayen.

// function som tar en array och ger tillbaka summan av värden i array.
//let initialValue = 0;

/*function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += array[i];
  }
  return sum;
}*/

/*const sum = arraySum(arr);*/
//funktion som givit en array ger tillbaka högsta talet i systemet.
//Namn: något som beskriver vad funktionen gör
//Input: en array
//Output: högsta talet i arrayen

/*function getHighestNumber(arr) {
  let highest;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
}*/

/*function betterArraySum() {
  let sum = 0;
  for (let v of arr) {
    sum += v;
  }
  return sum;
}*/

/*function reduceArraySum() {
  return arr.reduce((totalValue, currentValue) => totalValue + currentValue, 0);
}*/

/*console.log(arraySum());
console.log(betterArraySum());
console.log(reduceArraySum());*/

/*const sum = arraySum(arr);*/

//Uppgift hitta högsta talet i arrayen och spara
// i en variabel.

/*let highest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highest) {
    highest = arr[i];
  }
}

console.log("highest", highest);*/

//uppgift 2. beräkna medelvärdet av en array.

/*const medel = sum / arr.length;*/

//uppgift 3. vänd på arrayen och spara i en ny array.
//ledtråd: använd i--; för att setga ner till 0.
//ledtråd: använd push för att lägg till i ny array.
//const reverse = [];
//reverse.push[2];
//const reverse = [];
/*for (let i = arr.length; i >= 0; i--) {
  reverse.push(arr[i]);
}
alert(reverse);*/

//Object.

/*const obj = {
  name: "t-shirt",
  size: "m",
  brand: "hm",
};*/

/*for (let key in obj) {
  console.log("key", key);

  console.log("value", obj[key]);
}*/

//E-handel.

/*const product = [
  {
    name: "t-shirt",
    size: "m",
    brand: "hm",
    price: 100,
  },
  {
    name: "t-shirt2",
    size: "l",
    brand: "hm",
    price: 200,
  },
  {
    name: "t-shirt3",
    size: "xl",
    brand: "hm",
    price: 150,
  },
];

const priceOfThirdTShirt = product[2].price;*/

//uppgift 4. Beräkna summan av priserna på alla t-shirtar.
/*let priceSum = 0;
for (let i = 0; i < product.length; i++) {
  priceSum += product[i].price;
}
console.log("priceSum", priceSum);

const product = [
  {
    name: "t-shirt",
    size: "m",
    brand: "hm",
    price: 100,
  },
  {
    name: "t-shirt2",
    size: "l",
    brand: "hm",
    price: 200,
  },
  {
    name: "t-shirt3",
    size: "xl",
    brand: "hm",
    price: 150,
  },
];*/
