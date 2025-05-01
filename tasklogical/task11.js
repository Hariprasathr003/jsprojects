// Write a function removeDuplicates(arr) that takes an array of numbers as input and returns a new array with all duplicate values removed. The order of elements should be maintained.

console.log("TASK-11");
function removeDuplicates(arr) {
  const res = arr.filter((val, index) => arr.indexOf(val) == index);
  return res;
}

console.log("removeDuplicates :",removeDuplicates([1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5]));
