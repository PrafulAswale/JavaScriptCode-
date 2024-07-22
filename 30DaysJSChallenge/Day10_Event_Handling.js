// Activity 1: Basic Event Handling
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.getElementById("content").innerText =
    "If the customer is very smart, he or she will be able to achieve the desired result. They do not provide training, we are bound to lead the option of trouble or to assume it? We have a guide to choose for them at any time! He said nothing of his pains.";
});

// • Task 2: Add a double-click event listener to an image that toggles its visibility.
let image = document.getElementById("img-tag");
image.addEventListener("dblclick", () => {
  image.style.opacity = "1";
});

// Activity 2: Mouse Events
// • Task 3: Add a mouseover event listener to an element that changes its background color.
let task3 = document.getElementById("task3");
task3.addEventListener("mouseover", () => {
  let bgColor = `#${Math.floor(Math.random() * 1000000) - 1}`;
  task3.style.backgroundColor = bgColor;
});

// • Task 4: Add a mouseout event listener to an element that resets its background color.
task3.addEventListener("mouseout", () => {
  task3.style.backgroundColor = "black";
});

// Activity 3: Keyboard Events
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let task5 = document.getElementById("task5");
task5.addEventListener("keydown", logKey);
function logKey(e) {
  console.log(e.code);
}

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
task5.addEventListener("keyup", logKey);
function logKey(e) {
  document.getElementById("content").textContent += ` ${e.code}`;
}

// Activity 4: Form Events
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console..
let task7 = document.getElementById("task7");
task7.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
});

// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById("task8").addEventListener("change", (e) => {
  document.getElementById("task8-para").innerText += e.target.value;
});
// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let phaseOne = document.getElementById("phase-one");
phaseOne.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById("addChild").addEventListener("click", () => {
  let text = document.getElementById("innerContent").value;
  addListItem(text);
});
function addListItem(text) {
  const newItem = document.createElement("li");
  newItem.textContent = text;
  document.getElementById("phase-one").appendChild(newItem);
}
