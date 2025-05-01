//1)add 2 numbers in particular target index number

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 4, 5, 7, 9], 9), "add 2 numbers in particular target ");

//2)Add Two Numbers and this type of output

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addnumber(l1, l2) {
  let store = [];
  let count = 0;
  let length1 = Math.max(l1.length, l2.length);
  console.log("maxxxx", length1);

  for (let i = 0; i < length1; i++) {
    // let digit1 = l1[i] ;
    // let digit2 = l2[i] ;
    let sum = l1[i] + l2[i] + count;
    // let sum = (l1[i] || 0) + (l2[i] || 0) + count;
    console.log(sum, "33333");
    store.push(sum % 10);
    count = Math.floor(sum / 10);
  }
  return store;
}
const l1 = [1, 2, 3];
const l2 = [6, 5, 4];
console.log(addnumber(l1, l2), "Add Two Numbers ");

//3) middlenumber find

function findMedian(arr) {
  arr.sort((a, b) => a - b);

  const len = arr.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}
console.log(findMedian([1, 2, 3, 4]), "middlenumber find");

//4)Longest Substring Without Repeating Characters

const s = "abcabcbb";
var lengthOfLongestSubstring = function (s) {
  const ans = new Set(s);
  return ans.size;
};

console.log(
  lengthOfLongestSubstring(s),
  "longest Substring Without Repeating Characters "
);

//5)Palindrome Number in integer

var isPalindrome = function (x) {
  // const cleanStr = x.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); //string
  if (x < 0) return false;
  const original = x.toString();
  const reversed = original.split("").reverse().join("");

  return original === reversed;
};

console.log(isPalindrome([112]), "Palindrome Number in integer");

//   6)To Be Or Not To Be
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

var expect = function (val) {
  return {
    toBe: (val1) => {
      if (val !== val1) {
        return "Not Equal";
      } else {
        return true;
      }
    },
    notToBe: (val1) => {
      if (val === val1) {
        return "Equal";
      } else {
        return true;
      }
    },
  };
};

console.log(expect(5).toBe(5), "To Be Or Not To Be");

// 7)Sort By -> callback
// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.const arr = [5, 4, 1, 2, 3];

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(
  sortBy(arr, (x) => x),
  "Sort By -> callback"
);

// 8) find customer and our total price 


const orders = [
  {
    orderId: 101,
    customer: "Alice",
    items: [
      { name: "Laptop", price: 1200, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 }
    ]
  },
  {
    orderId: 102,
    customer: "Bob",
    items: [
      { name: "Keyboard", price: 75, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 1 }
    ]
  },
  {
    orderId: 103,
    customer: "Alice",
    items: [
      { name: "Monitor", price: 300, quantity: 2 }
    ]
  }
];

function getTotalSpentByCustomer(customerName) {
      const find=orders.filter(valu=>valu.customer  ===  customerName).reduce((acc,val)=>{
          const total= val.items.reduce((sum,cv)=>{
              return sum+cv.price * cv.quantity
          },0)
          return  acc + total
      },0)
      return find
}
console.log(getTotalSpentByCustomer("Bob"));


// Count how many times a character appears in a string

const str = "javascript";
const target = "a";

const count = str.split("").filter(val => val === target).length;

console.log(count);

//convert first letter to uppercase

const sentence = "hello world from js";
const titleCase = sentence.split(" ").map(val => val[0].toUpperCase() + val.slice(1)).join(" ");

console.log(titleCase);

// Find the factorial of a number

const num = 5;
let factorialnumbrer = 1;

for (let i = 1; i <= num; i++) {
  factorialnumbrer *= i;
}

console.log(factorialnumbrer); 







