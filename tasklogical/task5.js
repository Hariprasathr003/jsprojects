// Check if a given number is even or odd using the modulus (%) operator.
// console.log(isEven(5)); // Odd
// console.log(isEven(8)); // Even

console.log("TASK5");

function isEven(num) {
  const number = num % 2 == 0 ? "Even" : "ODD";
  return number;
}
console.log("Check if a given number is even or odd ", isEven(10));
