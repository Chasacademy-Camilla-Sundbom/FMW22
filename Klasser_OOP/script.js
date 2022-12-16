// OOP - Object Oriented Programming
// Data och funktionallitet på samma ställe.

const personObj = {
  name: "Fred",
  updateName: (name) => {
    personObj.name = name;
  },
};

// Functional programming
// Data och funktionallitet separeras.

const person = {
  name: "Joe",
  age: 50,
};

function updatePersonAge(personObj, age) {
  personObj.age = age;
}

updatePersonAge(person, 40);

// skapa ny data som bygger på den tidigare.
const numbers = [1, 2, 3];
const numbers2 = numbers.map((item) => {
  // [2, 3, 4]
  item + 1;
});
