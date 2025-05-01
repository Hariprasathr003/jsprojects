// Create an array called fruits with the following items: "Apple", "Banana", "Orange".
// Write code to add "Mango" to the end of the fruits array and "Strawberry" to the beginning.
// How would you access the third element in the fruits array?
// Write code to remove the last element from the fruits array.
// What will the following code output?
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.slice(1, 3));

console.log("TASK2");

let a = ["Apple", "Banana", "Orange"];
a.push("Mango");
console.log("add Mango to the end of the fruits", a);

a.unshift("Strawberry");
console.log("add Strawberry to the start of the fruits", a);
let b = a.at(3);
console.log("access the third element in the fruits", b);
a.pop();
console.log("remove the last element from the fruits", a);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 3)); //2,3
