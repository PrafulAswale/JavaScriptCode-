// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let js = "JavaScript JavaScript Java Script JavaScript JavaScript sfweasfafa";
let pattern = /JavaScript/g;
let result = js.match(pattern);
console.log(result);
// • Task 2: Write a regular expression to match all digits in a string. Log the matches.
let digit = "day1 day2 day3 day3 day4 day5 day6 day7 day8 day9";
pattern = /\d/g;
result = digit.match(pattern);

console.log(result);
// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let str =
  "Write a regular expression to match all words in a string that start with a capital letter. Log the matches.";
pattern = /([A-Z])\w+/g;
result = str.match(pattern);

console.log(result);
// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
digit = "12 21 13 311 14 41";
pattern = /\d+/g;

result = digit.match(pattern);

console.log(result);
// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a
//US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
pattern = /\((\d{3})\)\s*(\d{3})-(\d{4})/;
result = phoneNumber.match(pattern);
const [, areaCode, centralOfficeCode, lineNumber] = result;
console.log(
  `Area Code: ${areaCode} centralOfficeCode: ${centralOfficeCode} lineNumber${lineNumber}`
);
// • Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
let email = "username@gmail.com";
pattern = /^([^@]+)@([^@]+)$/;
result = email.match(pattern);
const [, username, domain] = result;
console.log("Username:", username, "Domain:", domain);

// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

str = `Write a regular expression to match a word only if it is at the beginning of a string
Log the matches.`;
pattern = /^\w+/gm;
result = str.match(pattern);
console.log(result);
// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
str = `Write a regular expression to match a word only if it is at the beginning of a string.
Log the matches.`;
pattern = /\w+.$/gm;
result = str.match(pattern);
console.log(result);
// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one
// special character). Log whether the password is valid.
const password = "Pass@1234";
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

if (regex.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}
// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const urls = [
  "http://example.com",
  "https://www.example.com/path?query=1",
  "ftp://example.com", // Invalid based on the given regex
  "localhost:3000",
  "http://localhost",
  "https://example.com:8080",
  "http://example",
  "http://example.com/space test", // Invalid URL due to space
];

regex =
  /^(https?:\/\/)?((([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,}))|localhost)(:[0-9]{1,5})?(\/[^\s]*)?$/;

urls.forEach((url) => {
  if (regex.test(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is an invalid URL.`);
  }
});
