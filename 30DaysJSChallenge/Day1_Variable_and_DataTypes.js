// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assing it a number, and log the value to the console
var numberValue = 1234;
console.log(typeof numberValue, numberValue);

// Task 2: Declare a variable using let, assing it a number, assing it string value, and log the value to the console
let stringValue = "Praful";
console.log(typeof stringValue, stringValue);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assing it a boolean value, and log the value to the console.
const booleanValue = true;
console.log(typeof booleanValue, booleanValue);

// Activity 3: Data Types
// Task 4: Create Variable of differnt data types(number, string, boolean, object, array) and log each variable's type of using typeof
let variable1 = 1234;
let variable2 = "Javascript";
let variable3 = true;
let variable4 = { variable1, variable2, variable3 };
let variable5 = [1, 2, 3, 4, 5];

console.log(
  typeof variable1,
  typeof variable2,
  typeof variable3,
  typeof variable4,
  typeof variable5
);

// Activity 4: Reassigning Variable
// Task 5: Declare a variable using let, assing it an initial value, reassign a new value, and log both values to the console
let qwerty = 1234;
console.log("before reassing:" + qwerty);
qwerty = 4321;
console.log("after reassing:" + qwerty);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error
const tryToChange = 3.14;
console.log(typeof tryToChange);
tryToChange = 3;
