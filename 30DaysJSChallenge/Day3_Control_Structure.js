// Activity 1: If-Else Statements
//Task 1: Write a program to check if a number is positive, negative, or zero,
//and log the result to the console.
let num1 = 15;
if (num1 > 0) {
  console.log("Number is positive.");
} else if (num1 < 0) {
  console.log("Number is negative");
} else {
  console.log("Zero");
}
//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and
//log the result to the console.
let age = 24;
if (age >= 18) {
  console.log("Person is eligible");
} else {
  console.log("Person is not eligible");
}
// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num2 = 12;
let num3 = 25;

if (num1 > num2 && num1 > num3) {
  console.log("num1 is greater ", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is greater ", num2);
} else {
  console.log("num3 is greater ", num3);
}
// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week
//based on a number (1-7) and log the day name to the console.
let numberOfDay = 5;

switch (numberOfDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    break;
}
//Task 5: Write a program that uses a switch case to assign a grade (A, B, C, D, F) based on
//a score and log the grade to the console.
let score = 95;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log(`Score: ${score}, Grade: ${grade}`);
// Activity 4: Conditional (Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log
//the result to the console.

num1 % 2 == 0 ? console.log("Even") : console.log("Odd");

// Activity 5: Combining Conditions
//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4,
//but not 100 unless also divisible by 400) and log the
let year = 2024;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Year is Leap Year.");
} else {
  console.log("Not a leap year.");
}
// result to the console.
