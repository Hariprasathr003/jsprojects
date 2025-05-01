// Destructuring

// [1, 2, 3, 4]

// const person = { name: "Alice", age: 25 };

console.log("TASK6");

const arr = [1, 2, 3, 4];

let [aa, bb, cc, dd] = arr;

console.log("array of  Destructuring :", bb);

const person = { name: "Alice", age: 25 };

let { name: aaa, age } = person;

console.log("object of Destructuring :", aaa, age);
