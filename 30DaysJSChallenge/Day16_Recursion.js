// Activity 1: Basic Recursion
// • Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function fact(num) {
  if (num == 0) return 1;

  return fact(num - 1) * num;
}

let factorial = fact(5);
console.log(factorial);
// • Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function Fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return Fib(n - 1) + Fib(n - 2);
  }
}

let Fibonacci = 9;
console.log(Fibonacci + "th Fibonacci Number: " + Fib(Fibonacci));
// Activity 2: Recursion with Arrays
// • Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for
//a few test cases.
let arr = [1, 2, 3, 4, 5];
let n = 5;

function sumOfArray(arr, n, sum) {
  if (n < 0) return sum;
  sum = arr[n] + sumOfArray(arr, n - 1, sum);

  return sum;
}

let sum = sumOfArray(arr, n - 1, 0);
console.log(sum);

// • Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few
//test cases.
arr = [12, 21, 2, 5, 16];
function findMax(arr, n, max) {
  if (n < 0) return max;

  if (arr[n] > max) {
    max = arr[n];
  }

  return findMax(arr, n - 1, max);
}

let result = findMax(arr, n - 1, 0);
console.log(result);
// Activity 3: String Manipulation with Recursion
// • Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str, n) {
  if (n < 0) return "";

  let newStr = str[n] + reverseString(str, n - 1);

  return newStr;
}
let str = "desreveRsIgnirtS";

result = reverseString(str, str.length - 1);

console.log(result);
// • Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a
//few test cases.

str = "RADAR";

function isPalindrome(str, s, e) {
  if (s > e) return true;

  if (str[s] !== str[e]) {
    return false;
  }
  return isPalindrome(str, s + 1, e - 1);
}

result = isPalindrome(str, 0, str.length - 1);

console.log(result);
// Activity 4: Recursive Search
// • Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, st, en, target) {
  if (st > en) return -1;

  let mid = Math.floor(st + (en - st) / 2);

  if (arr[mid] == target) {
    return mid;
  } else if (target > arr[mid]) {
    return binarySearch(arr, mid + 1, en, target);
  } else {
    return binarySearch(arr, st, mid - 1, target);
  }
}
let target = 8;
result = binarySearch(arr, 0, arr.length, target);
console.log(`Element ${target} found at index ${result}`);
// • Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
arr = [1, 2, 3, 41, 1, 3, 1, 1, 1, 1, 3, 45, 2];

function findOcc(arr, n, count, target) {
  if (n < 0) return count;
  if (arr[n] === target) {
    count++;
  }

  return findOcc(arr, n - 1, count, target);
}

result = findOcc(arr, arr.length - 1, 0, 1);
console.log(result);
// Activity 5: Tree Traversal (Optional)
// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
