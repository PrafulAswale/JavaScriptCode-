// Activity 1: Creating and Exporting Modules
// • Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import { add, person } from "./task_1.mjs";

const result = add(5, 3);
console.log(`The result of adding 5 and 3 is: ${result}`);
// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
person.personInfo();
// Activity 2: Named and Default Exports
// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import task3 from "./task3.mjs";

let product = task3.multiplyTwo(12, 21);
let substraction = task3.substractTwo(21, 12);
console.log("21-12: " + substraction, "\n12 * 21: " + product);
// • Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import task4 from "./task4.mjs";
task4();
// Activity 3: Importing Entire Modules
// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import task5 from "./task5.mjs";
let circum = 2 * task5.pi * 5;

console.log(task5.areaOfCircle(5), circum);
// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from "lodash";
let arr = [1, 2, 3, 4];

console.log(_.isArray(arr));
// • Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

console.log(axios.isCancel("something"));
// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling
// process.
// Not worked
