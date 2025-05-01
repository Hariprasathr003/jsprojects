// 1. Array Basics
// 👉 Exercise: Create and Access Elements
// Create an array called fruits with the values ["apple", "banana", "cherry"].

// Print the second element.

// Add "grape" at the end and "mango" at the beginning.

// Remove the last element and print the updated array.

const fruits = ["apple", "banana", "cherry"];
console.log("Print the second element :", fruits[2]);
fruits.push("grape"); //add last
console.log("Add grape at the end :", fruits);
fruits.unshift("mango"); //add first
console.log("Add mango at the beginning :", fruits);
fruits.pop();
console.log("updated array :", fruits);

// 2. Array Methods
// 👉 Exercise: Modify an Array
// Create an array numbers = [1, 2, 3, 4, 5].

// Use .push(6) and .unshift(0) to add elements.

// Use .pop() and .shift() to remove elements.

// Use .splice(2, 2) to remove two elements starting from index 2.

// Insert "a", "b" at index 1 using .splice().

const numb = [1, 2, 3, 4, 5];
numb.push(6); //add last
numb.unshift(0); //add first
console.log("Use add elements :", numb);
numb.pop(); //remove last
numb.shift(); //remove first
console.log(" Use remove elements :", numb);
numb.splice(2, 2);
console.log(" Use remove two elements starting from index 2 :", numb);
numb.splice(1, 0, "a", "b");
console.log("Insert a, b at index 1 using : ", numb);

// 3. Iterating Over Arrays
// 👉 Exercise: Loop Through Arrays
// Use a for loop to print each element in const colors = ["red", "green", "blue"].

// Use .forEach() to log each color.

// Use .map() to create a new array that converts each color to uppercase.

// Use .filter() to create a new array with only colors longer than 3 characters.

const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log("for loop to print each element ", colors[i]);
}

colors.forEach((obj) => obj);
console.log("Use .forEach() to log each color ", colors);

const mapUsing = colors.map((obj) => obj.toUpperCase());
console.log(
  "Use map() to create a new array that converts each color to uppercase",
  mapUsing
);

const filterUsing = colors.filter((obj) => obj.length > 3);
console.log(
  " Use filter to create a new array with only colors longer than 3 characters :",
  filterUsing
);

// 4. Searching and Finding Elements
// 👉 Exercise: Find Elements
// Given const nums = [5, 10, 15, 20, 25], find if 15 exists in the array using .includes().

// Find the index of 20 using .indexOf().

// Use .find() to get the first number greater than 10.

// Use .findIndex() to get the index of the first number greater than 10.

const nums = [5, 10, 15, 20, 25];

console.log("find 15 :", nums.includes(15));

console.log("index of 20 using :", nums.indexOf(20));

const findUsing = nums.find((obj) => obj > 10);
console.log("Use find() to get the first number greater than 10 :", findUsing);

const findIndexUsing = nums.findIndex((obj) => obj > 10);
console.log(
  " Use findIndex() to get the index of the first number greater than 10 :",
  findIndexUsing
);

// 5. Transforming Arrays
// 👉 Exercise: Map and Reduce
// Given const prices = [10, 20, 30, 40], create a new array with each price increased by 10% using .map().

// Find the total sum of prices using .reduce().

// Create a new array where each element is doubled using .map().

const prices = [10, 20, 30, 40];
const transMap = prices.map((obj) => (10 * obj) / 100 + obj); //1.1* total value
console.log(
  "create a new array with each price increased by 10% using .map() :",
  transMap
);

const sumOf = prices.reduce((obj, cv) => obj + cv, 0);
console.log("total sum of prices using reduce :", sumOf);

const doubleUsing = prices.map((obj) => obj * 2);
console.log(" each element is doubled using .map() :", doubleUsing);

// 6. Sorting and Reversing
// 👉 Exercise: Sort and Reverse
// Sort const names = ["Charlie", "Alice", "Bob"] alphabetically using .sort().

// Sort const nums = [40, 10, 100, 30] in ascending order.

// Reverse the array ["a", "b", "c", "d"].

const names = ["Charlie", "Alice", "Bob"];

const alph = names.sort();
console.log("alphabtically using .sort() :", alph);

const nu = [40, 10, 100, 30];

const ascen = nu.sort((x, y) => x - y);
console.log("ascending order", ascen);

const rev = ["a", "b", "c", "d"];
console.log("Reverse the array  :", rev.reverse());

// 7. Working with Nested Arrays
// 👉 Exercise: Flatten Arrays
// Flatten const nested = [[1, 2], [3, 4], [5, 6]] into a single array.

// Use .map() to square all numbers in const grid = [[2, 4], [6, 8]].

const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArray = nested.flat();
console.log("Flatten Arrays into a single array :", flatArray);
const grid = [
  [2, 4],
  [6, 8],
];
const answ = grid.flat();
const flatArr = answ.map((obj) => obj ** 2);
console.log("Use .map to square all numbers :", flatArr);

// 8. Array Destructuring & Spread Operator
// 👉 Exercise: Destructuring & Spreading
// Extract the first two elements of const data = ["x", "y", "z"] using destructuring.

// Copy const original = [1, 2, 3] into a new array using the spread operator.

// Merge [10, 20] and [30, 40] into a single array.

const data12 = ["x", "y", "z"];
const [ab, bc, cd] = data12;
console.log("Extract the first two elements :", ab, bc);

const original = [1, 2, 3, "hari"];
const copyArray = [...original];
console.log(
  " Copy const original into a new array using the spread operator :",
  copyArray
);
const dat = [10, 20];
const data2 = [30, 40, 50];
const merge = dat.concat(data2);
console.log("Merge into a single array :", merge);

// 9. Advanced Concepts: Higher-Order Functions
// 👉 Exercise: Advanced Array Operations
// Find the sum of even numbers in [1, 2, 3, 4, 5, 6] using .filter() and .reduce().

// Find the length of each string in ["hello", "world", "JavaScript"] using .map().

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const highOrderfun = numberss.filter((obj) => obj % 2 == 0);
const mabHighorder = highOrderfun.reduce((acc, cv) => {
  acc += cv;
  return acc;
}, 0);
console.log("using filter and reduce sum of even numbers :", mabHighorder);

const stringArray = ["hello", "world", "JavaScript"];
const MabUsingarray = stringArray.map((obj) => obj.length);
console.log("length of each string in :", MabUsingarray);
