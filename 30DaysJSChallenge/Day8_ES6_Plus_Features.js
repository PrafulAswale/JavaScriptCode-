// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let personName = "Praful";
let personAge = 24;

let str1 = `name: ${personName}, age: ${personAge}`;
console.log(str1);
// • Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`This is first line
This is second line`);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr = [1, 2, 3, 4, 5];

let [first, second] = arr;
console.log(`first: ${first}, second: ${second}`);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
  title: "India that is Bharat",
  author: "J Sai Deepak",
  year: "2021",
};

let { title, author } = book;

console.log(`Title: ${title}, Author: ${author}`);
// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.
let newarr = [...arr, 6, 7];
console.log(newarr);
// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.
function product(a, b = 1) {
  return a * b;
}

console.log(product(12));
console.log(product(17, 7));

// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let person = {
  personName,
  personAge,
  info() {
    console.log(this.personName, this.personAge);
  },
};

console.log(person);

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
const prop1 = "firstName";
const prop2 = "lastName";
const prop3 = "age";

const object = {
  [prop1]: "praful",
  [prop2]: "Aswale",
  [prop3]: 24,
};

console.log(object);
