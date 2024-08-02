// Activity 1: Understanding LocalStorage
// • Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
console.log("Task 1");

localStorage.setItem("username", "prafulaswale");
let username = localStorage.getItem("username");
console.log(username);

// • Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
let person = {
  name: "Praful Aswale",
  age: 24,
};

localStorage.setItem("person", JSON.stringify(person));

let personParse = JSON.parse(localStorage.getItem("person"));
console.log(personParse);

// Activity 2: Using LocalStorage
// • Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

function handleSubmit() {
  let fullName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    fullName: fullName,
    email: email,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(user));
}

function displayData() {
  let userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  document.getElementById("username").innerText += " " + userData.fullName;
  document.getElementById("useremail").innerText += " " + userData.email;
  document.getElementById("userpassword").innerText += " " + userData.password;
}

displayData();

// • Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
localStorage.removeItem("person");
console.log(localStorage.getItem("person"));

// Activity 3: Understanding SessionStorage
// • Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("prafulaswale", "prafulaswale");
console.log(sessionStorage.getItem("prafulaswale"));

// • Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. , and parse the object, then log it.
let book = {
  bookName: "India that is bharat",
  author: "J Sai Deepak",
  year: "2021",
};

sessionStorage.setItem("book", JSON.stringify(book));

console.log(JSON.parse(sessionStorage.getItem("book")));

// Activity 4: Using SessionStorage
// • Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on
// page load.
function displayBook() {
  let bookData = JSON.parse(sessionStorage.getItem("book"));

  document.getElementById("bookName").innerText += bookData.bookName;
  document.getElementById("author").innerText += bookData.author;
  document.getElementById("year").innerText += bookData.year;
}

displayBook();
// • Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
sessionStorage.removeItem("book");
console.log(JSON.parse(sessionStorage.getItem("book")));

// Activity 5: Comparing LocalStorage and SessionStorage
// • Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from
// both storage mechanisms.
let student = {
  studentName: "Praful Aswale",
  rollNo: "1234",
};

localStorage.setItem("student", JSON.stringify(student));
sessionStorage.setItem("student", JSON.stringify(student));

console.log(JSON.parse(localStorage.getItem("student")));
console.log(JSON.parse(sessionStorage.getItem("student")));

// • Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
localStorage.clear();
sessionStorage.clear();
