// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}
// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);
// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let iReverse = 10;
while (iReverse > 0) {
  console.log(iReverse);
  iReverse--;
}
// Activity 3: Do... While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop.
console.log("do while loop");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
// Task 6: Write a program to calculate the factorial of a number using a do... while loop.
console.log("Factorial");
let factorialNumber = 5;
let factorial = 1;
while (factorialNumber > 1) {
  factorial *= factorialNumber;
  factorialNumber--;
}
console.log(factorial);
// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
for (let i = 0; i < 5; i++) {
  for (let j = i; j > 0; j--) {
    process.stdout.write(`*`);
  }
  console.log();
}

// Activity 5: Loop Control Statements
// Task 8: write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// Task 9: write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
