// Activity 1: Understanding Promises
//Task 1: Create a promises that resolve with a message after 2-second timeout and log the message to the console

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(777);
  }, 200);
});

promiseA.then((val) => console.log("then block", val));
console.log("immediate logging");

// Task 2:
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(404);
  }, 200);
});

promiseB.catch((val) => console.log("catch block", val));
console.log("immediate logging");
