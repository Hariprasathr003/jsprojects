// const a = {
//     name: "ad",
//     age:20,
//     address: "something"
// };

// //output

// const b  = {
//     property1: "ad",
//     property2: 20,
//     property3: "something",
// };

console.log("Task-12");

const ans = {
  name: "ad",
  age: 20,
  address: "something",
};

const store = {};
let i = 1;
for (let x in ans) {
  store[`property${i}`] = ans[x];
  i++;
}
console.log("=============>", store);
