// Setup
/*const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && records[id].tracks == null) {
    records[id].tracks = [value];
  } else if (prop == "tracks" && value != "") {
    records[id].tracks.push(value);
  } else if (value == "") {
    deleterecords[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");*/

//ES6 - Ecmascript 6
// -...Operator (Spread operator)

//Spread används för att göra kopior av object.

/*const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

const recordCollectionRef = recordCollection;
recordCollectionRef[5439].albumTitle = "ABBA2";

// 1. gör en kopia
const recordCollectionCopy = { ...recordCollection };

// 2. Uppdatera
const recordCollectionWithUpdate = {
  ...recordCollection,
  5439: { albumTitle: "ABBA Silver" },
};

// uppgift: uppdatera recordcollection med spread - uppdatera valfritt id med nytt album
const recordCollectionWithUpdate2 = {
  ...recordCollection,
  1245: { artist: "sommarull" },
};
recordCollectionRef[1245] = {
  artist: "sommarull2",
};
console.log("recordCollectionWithUpdate2", recordCollectionWithUpdate2);
console.log("recordCollectionOriginal", recordCollection);
console.log("recordCollectionCopy", recordCollectionCopy);
console.log("recordCollectionRef", recordCollectionRef);
console.log("recordCollectionWithUpdate", recordCollectionWithUpdate);*/

// 3. Lägg till propertis med spread
/*const person = { name: "Fred", age: 53 };
const person2 = { ...person };
person2.age = 40;

const personRef = person;
personRef.name = "Joe";

console.log("person", person);
console.log("person2", person2);*/

// 4. ta bort med spread
const dog = { dogName: "Fido", age: 5, color: "white" };

/*const { name, ...dogWithNoName } = dog;

console.log("dogWithNoName", rest);*/

//Destructur
//Gamla sättet:
/*const name2 = dog.name;
const age = dog.age;
const color = dog.color;*/

//nya sättet (es6)
/*const { dogName, age, color } = dog;
console.log("dog props:", dogName, age, color);

//Uppgift: skapa ett object och plocka ut properties med deconstruct.

//Gamalt sätt
function updateAgeTo10(dog) {
  dog.age = 10;
}
updateAgeTo10(dog);

//Nytt sätt
function updateAgeTo10Es6({ age }) {
  age = 10;
}
updateAgeTo10Es6(dog);*/

//Spread med arrayer

const numbers = [1, 33, 55, 23, 2];
const numbersCopy = [...numbers];

const numbers2 = numbers;
numbers2.push(10);

numbersCopy.push(3);
console.log("numbers", numbers);
console.log("numbers2", numbers2);
console.log("numbersCopy", numbersCopy);

//Spread med arrayer - uppdatera
const strings = ["hej", "hallå"];
const strings2 = ["ok", "nej"];

const updateStrings = ["hepp2", ...strings, "hepp"];
console.log("updatestrings", updateStrings);
//lägg ihop arrayer
const strings3 = [...strings, ...strings2, "hepp"];
console.log("strings3", strings3);

//deconstruct med arrayer
const [text1, text2] = strings;
console.log(text1, text2);
