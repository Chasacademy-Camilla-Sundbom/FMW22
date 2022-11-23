/*function hello(name) {
  console.log(name);
}*/

/*const hello2 = (myName) => {
  console.log(myName);
};

function helloTo(helloFunction) {
  const name = "Fred";
  helloFunction(name);
}

helloTo(hello2);*/

//Uppgift. Skriv två functioner där den ena tar den andra som input.
//kalla på den ena funktionen.

/*const work = (myName) => {
  console.log(myName);
};

function helloTo(helloFunction) {
  const name = "Camilla";
  helloFunction(name);
}

helloTo(work);*/

//setTimeout, setInterval

/*function hej() {
  alert("hej");
}*/

/*const hej2 = () => {
  alert("hej2");
};*/

/*setTimeout(hej, 5000);

setTimeout(() => {
  alert("arrow function");
}, 2000);*/

/*setInterval(() => {
  //higher order function
  console.log(Date.now());
}, 1000);*/

//Higher order function = en funktion dom tar en annan funktion som argument/input

/*const names = ["Anna", "Sven", "Frank"];

//map = loopar igenom arrayer och uppdaterar värdena. Returnerar en ny array med uppdaterade värden

const helloNames = names.map((myName) => {
  return "hello" + myName;
});
console.log(helloNames);*/

//Gör en ny array med första bokstaven i varje namn
//Ledtråd: name.charAt(0) eller name[0]

/*const firstLeters = names.map((names) => {
  return names.charAt(0);
});
console.log(firstLeters);

//forEach ger inte tillbaks resultat, den ger inte någon ny array som resultat. man använder den för att uppdatera en variabel.

const numbers = [23, 25, 235, 12];

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});
console.log("sum", sum);*/

//filter

const product = [
  {
    name: "red t-shirt",
    size: "m",
    brand: "hm",
    price: 100,
    Image: "https://...",
  },
  {
    name: "blue t-shirt2",
    size: "l",
    brand: "hm",
    price: 200,
    Image: "https://...",
  },
  {
    name: "green t-shirt3",
    size: "xl",
    brand: "hm",
    price: 150,
    Image: "https://...",
  },
];

//let searchWord = "blue";

/*const filteredProducts = product.filter((product) => {
  return product.name.startsWith(searchWord);
});

console.log(filteredProducts);*/
const firstName = "hej";

function name() {
  console.log(x);
}

//Uppgift använd filter för att filtrera ut t-shirts billigare än 200.

console.table(product);
console.table(product.filter((v) => v.price < 200));
