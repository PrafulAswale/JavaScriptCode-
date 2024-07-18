// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// • Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0], arr[arr.length - 1]);

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.log("Push 6");
arr.push(6);
console.log(arr);
// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
console.log("Pop 6");
arr.pop();
console.log(arr);
// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log("shift");
console.log(arr.shift());
console.log(arr);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log("Unshift");
arr.unshift(1);
console.log(arr);

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log("Map");
let newArray = arr.map((ele) => {
  return ele * 2;
});
console.log(newArray);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
console.log("Filter");
let evenArray = arr.filter((ele) => {
  return ele % 2 == 0;
});

console.log(evenArray);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log("Reduce");
let sumOfArray = newArray.reduce((acc, curr) => acc + curr);
console.log(sumOfArray);

// • Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("forEach loop");
arr.forEach((ele) => {
  console.log(ele);
});
// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.log("Matrix");
let martrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let mat = "";
for (let i = 0; i < martrix.length; i++) {
  mat = "[ ";
  for (let j = 0; j < martrix[0].length; j++) {
    // console.log(martrx[i][j]);
    mat += martrix[i][j] + " ";
  }
  console.log(mat + "]");
}
// • Task 13: Access and log a specific element from the two-dimensional array.
console.log("martrix[2][0]: " + martrix[2][0]);
