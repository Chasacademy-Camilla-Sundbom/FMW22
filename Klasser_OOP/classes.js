// Klass - En funktion som skapar object.

// Tidigare sättet
function createObject(name, age) {
  const obj = {
    name: name,
    age: age,
  };

  return obj;
}

const myObj = createObject("David", 50);

// En Frukt class - En funktion som skapar fruktobject ()
function createFruit(name, isSour, rating) {
  // const fruit = {
  //   name: name,
  //   isSour: isSour,
  //   rating: rating,
  // }
  // return fruit;

  return {
    name: name,
    isSour: isSour,
    rating: rating,
  };
}
const fruit = createFruit("Apple", true, 4);

// Nytt för idag:
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
      return this.name + " is not tasty";
    }
  }
}

const fruit2 = new Fruit("Lemon", true, 3);
console.log("fruit2", fruit2);
console.log(fruit2.describe());

const rottenOrange = new Fruit("Orange", false, 1);
console.log(rottenOrange.describe());

// Uppgift 1. Skapa en klass Rectangle med variablerna: width, height.
// Uppgift 2. Skapa en area-function i Rectangle som räknar ut arean av rektangeln (bredden * höjden)
// Uppgift 3. Skapa en variabel som innehåller ett rektangel-object och logga arean av den.

class Triangle {
  constructor(side) {
    this.side = side;
  }
}

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
console.log("the area is: ", rectangle.area());

//Arv - Utöka en klass med ny funktionalitet

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

const square = new Square(5);
const s2 = new Square(10);

console.log("Square area: ", square.area(), s2.area());

// Arv - Skriv över funktioner (metoder) med arv.
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

const animal = new Animal("Mouse"); // Skapa en instans
animal.speak();

class Dog extends Animal {
  // Override
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Fido");
dog.speak();
