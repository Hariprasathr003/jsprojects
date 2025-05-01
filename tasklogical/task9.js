// Write a function moveZerosToEnd(arr) that takes an array as input and moves all zeros to the end while maintaining the order of non-zero elements.

console.log("TASK9");

function moveZerosToEnd(arr) {
  const value = [];
  const value2 = [];
  const result = [];
  for (let i of arr) {
    if (i == 0) {
      value.push(i);
    } else if (i !== 0) {
      value2.push(i);
    }
  }
  result.push(value2 + "," + value);
  return result;
}
console.log(moveZerosToEnd([1, 2, 0, 1, 2, 0, 5, 0, 12]));
