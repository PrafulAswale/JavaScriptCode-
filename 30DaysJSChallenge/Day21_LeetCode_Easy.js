// Activity 1: Two Sum
// • Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// • Log the indices for a few test cases.
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// Activity 2: Reverse Integer
// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.
let reverse = function (x) {
  let rev = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = (x - pop) / 10;
    if (rev > Math.pow(2, 31) / 10 || (rev == Math.pow(2, 31) / 10 && pop > 7))
      return 0;
    if (
      rev < Math.pow(-2, 31) / 10 ||
      (rev == Math.pow(-2, 31) / 10 && pop < -8)
    )
      return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};

console.log(reverse(1234));
console.log(reverse(56789));

// Activity 3: Palindrome Number
// • Task 3: Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// • Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(x) {
  if (x < 0) return false;
  let rev = 0;
  let num = x;
  while (x != 0) {
    let digit = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + digit;
  }
  // console.log(rev);

  return rev === num;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
// Activity 4: Merge Two Sorted Lists
// • Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// • Create a few test cases with linked lists and log the merged list.
// Done
// Activity 5: Valid Parentheses
// • Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters (, ), T, 3, T' and '], and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.
console.log("Valid Parentheses");

function isValid(s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch == "(" || ch == "[" || ch == "{") {
      st.push(ch);
    } else {
      if (st.length !== 0) {
        let top = st[st.length - 1];
        if (
          (ch == ")" && top == "(") ||
          (ch == "]" && top == "[") ||
          (ch == "}" && top == "{")
        ) {
          st.pop();
        } else return false;
      } else return false;
    }
  }

  if (st.length == 0) return true;
  else return false;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
