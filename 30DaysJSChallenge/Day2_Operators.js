// Activity 1: Arithmetic Operations
let num1 = 33;
let num2 = 16;
// Task 1: Write a program to add two numbers and log the result to the console.

let sum = num1 + num2;
console.log("Addition: " + sum);

// Task 2: write a program to substract two number and log the result to the console.
let subtraction = num1 - num2;
console.log("Subtraction: " + subtraction);

// Task 3: write a program to multiply two number and log the result to the console.

let product = num1 * num2;
console.log("Multiplication: " + product);

// Task 3: write a program to divide two number and log the result to the console.
let division = num1 / num2;
console.log("Division: " + division);

// Task 4: Write a program to find the remainder when one number is divided by another and
//log the result to the console.
let mod = num1 % num2;
console.log("Mod: " + mod);

// Activity 3: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let result = (num1 += 15);
console.log(result);

// Task 7: Use the += operator to add a number to a variable and log the result to the console.
result = num2 -= 5;
console.log(result);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using › and ‹ and log the result to the console.
result = num1 > num2;
console.log("num1 > num2: " + result);

result = num1 < num2;
console.log("num1 < num2: " + result);

// Task 9: Write a program to compare two numbers using >= and ‹- and log the result to the console.
result = num1 >= num2;
console.log("num1 >= num2: " + result);
result = num1 <= num2;
console.log("num1 <= num2: " + result);
// Task 10: Write a program to compare two numbers using -= and ==- and log the result to the console.
result = num1 == num2;
console.log("num1 == num2: " + result);

result = num1 === num2;
console.log("num1 === num2: " + result);

// Activity 4: Logical Operators
//Task 11: Write a program that uses the && operator to combine two conditions and log the result
//to the console.
console.log("(num1 > num2) && (num1 < num2): " + (num1 > num2 && num1 < num2));
//Task 12: Write a program that uses the || operator to combine two conditions and log the result
//to the console.
console.log("(num1 > num2) || (num1 < num2): " + (num1 > num2 || num1 < num2));

//Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log(
  "!(num1 > num2) && (num1 < num2): " + !(num1 > num2 && num1 < num2)
);

//Activity 5: Ternary Operator
//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative
//and log the result to the console.
console.log(
  `num1 > num2 ? "true" : "false" => ` + (num1 > num2 ? "true" : "false")
);
