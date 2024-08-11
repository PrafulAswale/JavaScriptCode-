// Activity 1: Add Two Numbers
// • Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node
// contains a single digit. Add the two numbers and return the sum as a linked list.
// • Create a few test cases with linked lists and log the sum as a linked list.

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummyHead.next;
};
// Activity 2: Longest Substring Without Repeating Characters
// • Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// • Write a function that takes a string and returns the length of the longest substring without repeating characters.
// • Log the length for a few test cases, including edge cases.
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
// Activity 3: Container With Most Water
// • Task 3: Solve the "Container With Most Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines
// that together with the x-axis form a container, such that the container holds the most water.
// • Log the maximum amount of water for a few test cases.

let maxArea = function (height) {
  let left = 0;
  let ans = 0;
  let right = height.length - 1;

  while (left <= right) {
    let min = Math.min(height[left], height[right] * (right - left));
    ans = Math.max(ans, min);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let maxWater = maxArea(height);

console.log(maxWater);
// Activity 4: 3Sum
// • Task 4: Solve the "3Sum" problem on LeetCode.
// • Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// • Log the triplets for a few test cases, including edge cases.
function threeSum(nums) {
  nums.sort((a, b) => a - b); // Sort the array
  let ans = [];

  // Edge case: if length is less than 3, return empty array
  if (nums.length < 3) return ans;

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let sums = 0 - nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === sums) {
          ans.push([nums[i], nums[low], nums[high]]);
          // Skip duplicate elements
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] > sums) {
          high--;
        } else {
          low++;
        }
      }
    }
  }

  return ans;
}
let nums = [-1, 0, 1, 2, -1, -4];

let ans = threeSum(nums);
console.log(ans);

// Activity 5: Group Anagrams
// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
// • Log the grouped anagrams for a few test cases.
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function getFreqString(str) {
  let freq = [];
  for (let i = 0; i < 26; i++) {
    freq[i] = 0;
  }
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let freqString = "";

  let ch = "a";
  freq.forEach((i) => {
    freqString += ch;
    freqString += i;

    ch++;
  });

  return freqString;
}
function groupAnagrams(strs) {
  if (strs == null || strs.length == 0) return [];

  let freqMap = new Map();
  // Map<String, List<String>> freqMap = new HashMap<>();

  strs.forEach((str) => {
    let freqString = getFreqString(str);

    if (freqMap.has(freqString)) {
      freqMap.get(freqString).push(str);
    } else {
      let strList = [];
      strList.push(str);
      freqMap.set(freqString, strList);
    }
  });

  return freqMap;
}
let result = groupAnagrams(strs);

console.log(result.values());
