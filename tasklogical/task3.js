// Swap two variables without using a temporary variable.



console.log("TASK3");

let temp1 = 10;
let temp2 = 20;
// tem1 = tem2 + tem1; //30
// tem2 = tem1 - tem2; //10
// tem1 = tem1 - tem2; //20
// console.log("temp1 :",tem1);
// console.log("temp2 :", tem2);
console.log("temp1", temp1, "temp2", temp2);

[temp1, temp2] = [temp2, temp1];

console.log(
  "Swap two variables without using a temporary variable",
  "temp1 :",
  temp1,
  "temp2 :",
  temp2
);
