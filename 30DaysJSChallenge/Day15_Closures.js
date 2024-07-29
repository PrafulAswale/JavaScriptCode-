// Activity 1: Understanding Closures
// • Task 1: Write a function that returns another function, where the inner function accesses a variable from
//the outer function's scope. Call the inner and log the result.
function one() {
  let someVariable = "In the function one";
  function onePointOne() {
    return someVariable;
  }

  return onePointOne();
}

console.log(one());

// • Task 2: Create a closure that maintains a private counter. Implement functions to increment and
//get the current value of the counter.

function counter() {
  let count = 0;

  function incrementCounter() {
    count++;
  }
  function getCounter() {
    return count;
  }
  incrementCounter();
  return getCounter;
}

let getCount = counter();
console.log(getCount());
// Activity 2: Practical Closures
// • Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID
//and increment it with each call.
function generateUniqueID() {
  noOfIDsGenerated = 0;
  function generate() {
    noOfIDsGenerated++;
    return Math.floor(Math.random() * 10000) + 1;
  }

  function getCountOfIds() {
    return noOfIDsGenerated;
  }

  return { getCountOfIds, generate };
}

let { generate, getCountOfIds } = generateUniqueID();
console.log(generate());
console.log(generate());
console.log(generate());

console.log(getCountOfIds());

// • Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greet(name) {
  return function () {
    return `Hey, hello ${name}, how are you?`;
  };
}

let greetingMessage = greet("Praful");
console.log(greetingMessage());
// Activity 3: Closures in Loops
// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called.
//Use a closure to ensure each function logs the correct index.
let arrayOfFunc = [];
for (let i = 0; i < 5; i++) {
  let fun = (function (index) {
    return function () {
      console.log("Index No:" + index);
    };
  })(i);

  arrayOfFunc.push(fun);
}
for (let i = 0; i < arrayOfFunc.length; i++) {
  arrayOfFunc[i]();
}
// Activity 4: Module Pattern
// • Task 6: Use closures to create a simple module for managing a collection of items.
//Implement methods to add, remove, and list items.
const itemManager = (function () {
  let items = [];
  function addItem(item) {
    items.push(item);
    console.log(`${item} added.`);
  }

  function removeItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      console.log(`Removed: ${item}`);
    } else {
      console.log(`Item not found: ${item}`);
    }
  }

  function listItems() {
    console.log("Items:", items.join(", "));
  }

  return {
    add: addItem,
    remove: removeItem,
    list: listItems,
  };
})();
itemManager.add("Apple");
itemManager.add("Banana");
itemManager.list();
itemManager.remove("Banana");
itemManager.list();

// Activity 5: Memoization
// • Task 7: Write a function that memoizes the results of another function.
// Use a closure to store the results of previous computations.
function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage:
const slowFunction = (num) => {
  console.log("Processing...");
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Logs: Processing... 10
console.log(memoizedFunction(5)); // Logs: 10 (from cache)

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoizeFactorial() {
  let cache = {};

  return function factorial(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n === 0) {
        cache[n] = 1;
      } else {
        cache[n] = n * factorial(n - 1);
      }
      return cache[n];
    }
  };
}

const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(5)); // Logs: 120 (from cache)
