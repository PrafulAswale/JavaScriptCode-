// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
try {
  functionDoesNotExist();
} catch {
  console.log("Function Does Not Exist");
}

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.
//Use a try-catch block to handle this error.
function divide(a, b) {
  if (b == 0) throw "Can not divide by Zero";
  return a / b;
}
try {
  divide(12, 0);
} catch (msg) {
  console.log(msg);
}

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block.
//Log messages in the try, catch, and finally blocks to observe the execution flow.
console.log("TASK 3");
try {
  divide(12, 5);
} catch (error) {
  console.log(error);
} finally {
  console.log("finally");
}

// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class.
//Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function throwError() {
  throw new CustomError("This is custom error message.");
}

try {
  throwError();
} catch (error) {
  console.error(error.message);
}

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and
//throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function userInfo(name, email, password) {
  if (name.length == 0) {
    throw new CustomError("name must not be empty");
  } else if (email.length == 0) {
    throw new CustomError("email must not be empty");
  } else if (password.length == 0) {
    throw new CustomError("password must not be empty");
  }
}
try {
  userInfo("praful", "prafulcode15@gmail.com", "");
} catch (err) {
  console.log(err.message);
}

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and
//log an appropriate message to the console.
function isItTrue() {
  return false;
}
const task6 = new Promise((resolve, reject) => {
  if (isItTrue()) {
    resolve("Promise Resolve");
  } else {
    reject("Promise Rejected");
  }
});

task6
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects,
// and log the error message. Function that returns a promise that randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("Success!");
      } else {
        reject(new Error("Random error occurred."));
      }
    }, 1000); // Simulating asynchronous operation
  });
}

// Async function to handle the promise with try-catch
async function handlePromise() {
  try {
    const result = await randomPromise();
    console.log("Promise resolved with result:", result);
  } catch (error) {
    console.error("Error caught:", error.message);
  }
}

// Calling the async function
handlePromise();

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using
//.catch() . Log an appropriate error message to the console.

let task8 = fetch("https://somewebsite.com");
task8.catch((err) => console.log("Failed"));
// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the
// error using try-catch.
// Log an appropriate error message.
async function fetchData() {
  const url = "https://example.com/api/data"; // Replace with an invalid URL to simulate an error

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Call the async function to initiate the request
fetchData();
