// Class - En function för att skapa obejct

//Tidigare sättet
function creatObjekt(name, age) {
  const obj = {
    name: name,
    age: age,
  };

  return obj;
}

const myObj = creatObjekt("Camilla", 38);

// En frukt class - En function som skapar fruktobject
function creatFruit(name, isSour, rating) {
  return {
    name: name,
    isSour: isSour,
    rating: rating,
  };
}
const Fruits = creatFruit("Apple", true, 4);

//Nytt för idag:
class Fruit {
  constructor(name, isSour, rating) {
    this.name = name;
    this.isSour = isSour;
    this.rating = rating;
  }

  describe() {
    if (this.rating >= 3) {
      return this.name + " is tasty!";
    } else {
      return this.name + "is not tasty";
    }
  }
}

const fruit2 = new Fruit("Lemon", true, 3);
console.log("fruit2", fruit2);
console.log(fruit2.describe());

const rottenOrange = new Fruit("Orange", false, 1);
console.log(rottenOrange.describe());

// Uppgift 1. Skapa en class som heter rectangle med variablerna: width, heigt.
// Uppgift 2. Skapa en area- function i Rectangle som räknar ut arena av rektangeln.
// Uppgift 3. Skapa en variabel som innehåller en rectangle obj och logga arean

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 5);
console.log("the area is:", rectangle.area());

// Arv - Utöka en klass med ny funktionalitet

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(5);
console.log("Square area:", square.area());

// Arv- Skriv över en funktion (metoder) med arv.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

const animal = new Animal("Mouse"); //skapar en instans
animal.speak();

class Dog extends Animal {
  speak() {
    //Override
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Fido");
dog.speak();
