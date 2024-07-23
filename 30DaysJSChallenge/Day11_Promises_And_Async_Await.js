// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This message print after 2 second");
  }, 200);
});

promiseA.then((message) => console.log(message));
console.log("immediate logging");

// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using • catch()
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: This message print after 2 second");
  }, 200);
});

promiseB.catch((message) => console.log(message));
console.log("immediate logging");

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 2000);
  });
}

function fetchData3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 1500);
  });
}

fetchData1()
  .then((data1) => {
    console.log(data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log(data2);
    return fetchData3();
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function functionOne() {
  await promiseA.then((message) => {
    console.log("Task-4 " + message);
  });
}
functionOne();
console.log("Task 4 Completed");

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function functionTwo() {
  try {
    await promiseB.then((message) => {
      console.log(message);
    });
  } catch (error) {
    console.log("TASK-5", error);
  }
}
functionTwo();

// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch APl to get data from a public API and log the response data to the console using promises.
const fetchAPI = fetch("https://api.github.com/users/prafulaswale");
fetchAPI.then(response => {return(response.json());}).then((response) =>{console.log(response.login)})
// • Task 7: Use the fetch API to get data from a public APl and log the response data to the console using async/await.
async function functionThree() {
  const url = "https://api.github.com/users/prafulaswale";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json.login);
  } catch (error) {
    console.log(error.message);
  }
}
functionThree();
// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promiseA, promise1]).then((values) => {
  console.log(values);
}).catch(message =>{console.log(message);});
// • Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise2, promise1]);