// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year,
//and log the object to the console.
let book = {
  title: "India that is Bharat",
  author: "J Sai Deepak",
  year: "2021",
};

console.log(book);
// • Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${book.title}, Author: ${book.author}, Year ${book.year}`);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author,
//and log the result of calling this method.
function bookInfo() {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Year ${book.year}`
  );
}
book.bookInfo = bookInfo;
book.bookInfo();

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property,
//then log the updated object.
function updateYear(year) {
  book.year = year;
}

book.updateYear = updateYear;
book.updateYear("2022");
book.bookInfo();
// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books
// (an array of book objects), and log the library object to the console.
let library = {
  name: "The great indian library",
  books: [book],
};

console.log(library);
// • Task 6: Access and log the name of the library and the titles of all the books in the library.
// Activity 4: The this Keyword
let book2 = {
  title: "Hindus in hindu rashtra",
  author: "Anand Rangnathan",
  year: "2023",
};
library.books.push(book2);
console.log("Name of Library: ", library.name);
for (let i = 0; i < library.books.length; i++) {
  const element = library.books[i].title;
  console.log(i + 1, element);
}
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the
//book's title and year, and log the result of calling this method.

function bookInfoWiththis() {
  console.log(this.title + " in " + this.year);
}

book.bookInfoWiththis = bookInfoWiththis;
book.bookInfoWiththis();

// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property
//and its value.
for (const key in book) {
  if (Object.hasOwnProperty.call(book, key)) {
    const element = book[key];
    console.log(element);
  }
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));
