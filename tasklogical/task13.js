console.log("Task-13");

// Input: [2, 4, 3, 7, 1, 5, 9], target = 6
// Output: [[2, 4], [3, 3], [1, 5]]

const input = [2, 4, 3, 7, 1, 5, 9];
const target = 6;

// Input: [1, 2, 3, 4, 5], target = 10
// Output: []

// const input = [1, 2, 3, 4, 5];
// const target = 10;

function find(arr, target) {
  const store = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        store.push([arr[i], arr[j]]);
      }
    }
  }

  return store;
}

console.log(find(input, target));
