// Input
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 }
// ];

// Expected output
// {
//   Alice: 25,
//   Bob: 30,
//   Charlie: 28
// }
// Hint:
// Use .reduce() to build an object.

console.log("TASK1");

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

const result = users.reduce((ans, val) => {
  // ans += [val.name + ":" + val.age ];
  // ans = Object.values(users);   //direct calling in all key ,values showed

  ans[val.name] = val.age;

  return ans;
}, {});
console.log(result);

// for (let key in users) {
//   console.log(users[key]);
// }

//const store={};
// const result = users.map((obj) => [obj.name, obj.age]);
// console.log(result);
