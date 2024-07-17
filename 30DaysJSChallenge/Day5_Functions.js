// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd");
  }
}

isEvenOrOdd(13);
//Task 2: Write a function to calculate the square of a number and return the result.
function getSquare(number) {
  return number * number;
}

console.log(getSquare(6));
// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(getMax(12, 21));
// Task 4: Write a function expression to concatenate two strings and return the result.
function getConcate(str1, str2) {
  return str1 + str2;
}

console.log(getConcate("Con", "cate"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sumOfTwo = (a, b) => {
  return a + b;
};

console.log(sumOfTwo(21, 12));
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let isContain = (str, ch) => {
  for (let i = 0; i < str.length; i++) {
    if (str[0] === ch) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

console.log(isContain("Praful", "P"));
// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function getProduct(num1, num2 = 1) {
  return num1 * num2;
}

console.log(getProduct(13, 5));
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function giveGreeting(name, age = 10) {
  return `${name}, Happiest ${age}th Birthday.`;
}
console.log(giveGreeting("Praful", 24));
// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function func(giveFunction, times) {
  while (times-- > 0) giveFunction(times);
}

function giveFunction(times) {
  console.log(times);
}
func(giveFunction, 5);
// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
// to the result.

function addNumber(value) {
  return value * value;
}

function multipleNumber(result) {
  return result / 2;
}
function twofunction(addNumber, multipleNumber, value) {
  let result = addNumber(value);
  let resultOfResult = multipleNumber(result);
  console.log(result);
  console.log(resultOfResult);
}
twofunction(addNumber, multipleNumber, 5);
