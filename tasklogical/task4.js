// Create a function that takes two numbers and returns their sum, difference, product, and quotient and string template used.

console.log("TASK4");

function calculate(a, b) {
  const sum = a + b;
  const difference = a - b;
  const product = a * b;
  const quotient = a / b;
  return `The calculate sum is ${sum} and difference is ${difference} and product is ${product} and quotient is ${quotient} `;
}

console.log(calculate(10, 2));
