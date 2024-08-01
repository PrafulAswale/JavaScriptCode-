// Activity 1: Sorting Algorithms
// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
let arr = [2, 1, 3, 4, 5, 1];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Bubble Sorted Array ", arr);
// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
arr = [6, 3, 9, 5, 2, 8];
for (let i = 0; i < arr.length - 1; i++) {
  let min_idx = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min_idx] > arr[j]) {
      min_idx = j;
    }
  }
  let temp = arr[min_idx];
  arr[min_idx] = arr[i];
  arr[i] = temp;
}
console.log("Selection Sorted Array:", arr);

// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
arr = [7, 8, 9, 5, 2, 8, 3, 4];

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;

  return i;
}
function quicksort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    quicksort(arr, low, pi - 1);
    quicksort(arr, pi + 1, high);
  }
}
quicksort(arr, 0, arr.length - 1);
console.log(arr);
// Activity 2: Searching Algorithms
// • Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 4;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (element == target) {
    console.log(`Element ${target} found at index ${i}`);
    break;
  }
}
// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

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
target = 8;
result = binarySearch(arr, 0, arr.length, target);
console.log(`Element ${target} found at index ${result}`);
// Activity 3: String Algorithms
// • Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
let freqArr = [];

for (let i = 0; i < 26; i++) {
  freqArr.push(0);
}

let str = "Praful Aswale";
str = str.toLowerCase();

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") continue;
  let idx = str[i].charCodeAt(0) - 97;
  freqArr[idx] += 1;
}

for (let i = 0; i < freqArr.length; i++) {
  if (freqArr[i] == 0) continue;
  console.log(String.fromCharCode(97 + i) + " => " + freqArr[i]);
}

// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
str = "ABCDEFGABEF";
let maxlen = 0;
let start = -1;
let dict = [];
for (let i = 0; i < 256; i++) {
  dict.push(-1);
}

for (let i = 0; i < str.length; i++) {
  if (dict[str[i].charCodeAt(0)] > start) {
    start = dict[str[i].charCodeAt(0)];
  }

  dict[str[i].charCodeAt(0)] = i;
  maxlen = Math.max(maxlen, i - start);
}
console.log(maxlen);
// Activity 4: Array Algorithms
// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.
arr = [1, 2, 3, 4, 5];
function rotateByK(arr, k) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result[(i + k) % arr.length] = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = result[i];
  }
}
rotateByK(arr, 2);

console.log("Rotated Arr: ", arr);
// • Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8];
let sortedArr = [];
let n1 = arr1.length;
let n2 = arr2.length;
let i = 0;
let j = 0;
let k = 0;

while (n1 > i && n2 > j) {
  if (arr1[i] < arr2[j]) {
    sortedArr[k] = arr1[i];
    i++;
    k++;
  } else {
    sortedArr[k] = arr2[j];
    j++;
    k++;
  }
}

while (n1 > i) {
  sortedArr[k] = arr1[i];
  i++;
  k++;
}

while (n2 > j) {
  sortedArr[k] = arr2[j];
  j++;
  k++;
}
console.log(sortedArr);
// Activity 5: Dynamic Programming (Optional)
// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
