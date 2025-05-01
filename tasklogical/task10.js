// Write a function findSecondLargest(arr) that takes an array of numbers as input and returns the second largest number in the array.

console.log("TASK-10");
function findSecondLargest(arr) {
  let res = arr.sort();
  console.log(res);
  return res[res.length - 2];
}
console.log(
  "findsecondlargest number :",
  findSecondLargest([1, 2, 3, 4, 5, 3, 4, 9])
);
