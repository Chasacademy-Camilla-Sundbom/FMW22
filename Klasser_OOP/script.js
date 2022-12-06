// OOP -Object Oirented Programming
// Data  & funktionallitet på samma ställe

const persons = {
  name: "Fred",
  updateName: (name) => {
    persons.name = name;
  },
};

//Function programming
// Data & funktionallitete separeras.

const person = {
  name: "Joe",
  age: 50,
};

function updatePersonAge(personObj, age) {
  personObj.age = age;
}
updatePersonAge(person, 40);

const numbers = [1, 2, 3];
// skapr ny data som bygger på den tidgare
const numbers2 = numbers.map((item) => {
  //[2,3,4]
  item + 1;
});
