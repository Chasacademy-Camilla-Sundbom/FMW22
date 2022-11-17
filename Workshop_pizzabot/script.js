//const vegetarian = "Vegetarian Pizza";
//const hawaiian = "Hawaiian Pizza";
//const pepperoni = "Pepperoni Pizza";

////const pizzaPrice = 80;

//Put your Javscript code here:
//const result = prompt("Vad är din favvofärg");

//const message = "din favvofärg är: " + result
//const message = `Din favvofärg är: ${result}`;

//alert(message);

const person1 = { namn: "Sven", dish: "pizza", price: 99 };
const person2 = { namn: "Olle", dish: "hamburgare", price: 100 };
const person3 = { namn: "Pelle", dish: "spagetti", price: 70 };

const customers = [person1, person2, person3];

//beräkna totpris
/*let totalPrice = 0;

for (let i = 0; i < customers.length; i++) {
  //totalPrice = totalPrice + customers[i].price;
  totalPrice += customers[i].price;
}

alert(totalPrice);*/

/*function calculateTotalPrice(theCustomers) {
  //beräkna totpris
  let totalPrice = 0;

  for (let i = 0; i < customers.length; i++) {
    //totalPrice = totalPrice + customers[i].price;
    totalPrice += customers[i].price;
  }
  return totalPrice;
}

const totalPrice = calculateTotalPrice(customers);

alert(totalPrice);*/

function calculateTotalDish(theCustomers) {
  //beräkna totmat
  let totalDish = 0;

  for (let i = 0; i < customers.length; i++) {
    //totalfood = totalfood + customers[i].dish;
    totalDish += customers[i].dish;
  }
  return totalDish;
}

const totalDish = calculateTotalDish(customers);

alert(totalDish);
