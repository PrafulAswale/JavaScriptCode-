// Activity 1: Selecting and Manipulating Elements
// • Task 1: Select an HTML element by its ID and change its text content.
let title = document.getElementById("title");
title.innerText = "Day9_DOM_Manipulation";

// • Task 2: Select an HTML element by its class and change its background color.
let bg_color = document.querySelector(".bg-color");
bg_color.style.backgroundColor = "#646464";

// Activity 2: Creating and Appending Elements
// • Task 3: Create a new div element with some text content and append it to the body.
let divElement = document.createElement("div");
divElement.innerHTML = "Creating and Appending Elements";
document.body.append(divElement);

// • Task 4: Create a new li element and add it to an existing ul list.
let superhero = document.getElementById("superhero");
let antman = document.createElement("li");
antman.innerText = "Antman";
superhero.appendChild(antman);

// Activity 3: Removing Elements
// • Task 5: Select an HTML element and remove it from the DOM.
document.querySelector(".remove-this").remove();

// • Task 6: Remove the last child of a specific HTML element.
let phaseOne = document.getElementById("phase-one");

let lastChild = phaseOne.children[phaseOne.children.length - 1];
phaseOne.removeChild(lastChild);

// Activity 4: Modifying Attributes and Classes
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let imgTag = document.getElementById("img-tag");
imgTag.setAttribute(
  "src",
  "https://media.istockphoto.com/id/870361774/photo/freeze-motion-of-colored-powder-explosions-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=8C8oZOvHcfGinWtAycciMA1C4rTP2gCu8zXPHequcLc="
);

// • Task 8: Add and remove a CSS class to/from an HTML element.
phaseOne.classList.add("bg-color");
imgTag.classList.remove("WH-100");

// Activity 5: Event Handling
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let btn = document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", () => {
  document.getElementById("content").innerText =
    "If the customer is very smart, he or she will be able to achieve the desired result. They do not provide training, we are bound to lead the option of trouble or to assume it? We have a guide to choose for them at any time! He said nothing of his pains.";
});

// • Task 10: Add a mouseover event listener to an element that changes its border color.
let flag = true;
bg_color.addEventListener("mouseover", () => {
  if (flag) {
    bg_color.style.borderColor = "#1eafc6";
    flag = !flag;
  } else {
    bg_color.style.borderColor = "#242424";
    flag = !flag;
  }
});
