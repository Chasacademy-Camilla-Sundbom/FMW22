/*let fruit = "apple";
fruit = "Orange";
console.log("the fruit is", fruit);

const fruits = ["Banana", "Orange", "Kiwi"];
console.log(fruits, [2]);

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(numbers1);

const numbers2 = [65, 44, 12, 4];
numbers2.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}

console.log(numbers2);*/

/*const number = [1, 2, 3];
// skapr ny data som bygger på den tidgare
const numbers = number.map((item) => {
  item + 1;
});
console.log(numbers);*/

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
