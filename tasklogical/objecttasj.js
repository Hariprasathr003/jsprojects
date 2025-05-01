// 1. Object Basics
// Exercise 1: Create an Object
// Create an object called person with properties name, age, and city. Then, log the object to the console.

const person_123 = {
  name: "hari",
  age: 22,
  city: "theni",
};
console.log(" Create an object called person :", person_123);

// Exercise 2: Access Object Properties
// Using the person object, log the name and age properties using both dot notation and bracket notation.

console.log(
  " both dot notation and bracket notation :",
  person_123.name,
  person_123["age"]
);

// 2. Object Methods
// Exercise 3: Add a Method to an Object
// Add a method greet to the person object that logs "Hello, my name is John".

person_123.greet = function () {
  console.log(
    `Add a method greet to the person object : Hello, my name is ${this.name}`
  );
};
person_123.greet();

// 3. Modifying Objects
// Exercise 4: Add, Update, and Delete Properties
// Add a new property email: "john@example.com"
// Update city to "Los Angeles"
// Delete the age property

person_123["email"] = "hari@example.com"; //add
person_123.city = "p.c.patti"; //update
delete person_123.age; //delete
console.log("Add, Update, and Delete :", person_123);

// 4. Iterating Over Objects
// Exercise 5: Loop Through an Object
// Use a for...in loop to print all keys and values of the person object.

for (let key in person_123) {
  console.log(`loop to print all keys and value : ${key}: ${person_123[key]}`);
}

// 5. Object Methods and this
// Exercise 6: Use this Keyword in an Object Method
// Modify the greet function so that it dynamically references the object's name.

const user = {
  name: "vicky",
  greet() {
    console.log(
      ` Use this Keyword in an Object Method : Hello, my name is ${this.name}`
    );
  },
};
user.greet();

// 6. Object Destructuring
// Exercise 7: Destructure an Object
// Extract name and city from the person object using destructuring.

const { name, city } = person_123;
console.log("Destructure an Object : ", name, ",", city);

// 7. Object Spread and Rest
// Exercise 8: Copy an Object Using Spread
// Create a new object personCopy by copying person using the spread operator.

const personCopy = { ...person_123 };
console.log("copying person using the spread operator :", personCopy);

// Exercise 9: Merge Two Objects
// Create an object address and merge it with person.

const address = { street: "thilager street", pincode: "625531" };
// const mergedPerson = { ...person_123, ...address };
const mergedPerson = Object.assign(person_123, address);
console.log("Merge Two Objects :", mergedPerson);

// 8. Object Methods (Object.keys, Object.values, Object.entries)
// Exercise 10: Get Object Keys and Values
// Log the keys and values of the person object.

console.log(Object.keys(person_123)); //keys
console.log(Object.values(person_123)); //values

// Exercise 11: Convert Object to Array
// Use Object.entries() to convert person into an array of key-value pairs.

console.log(Object.entries(person_123)); //key-value pairs

// 9. Object Prototypes
// Exercise 12: Create an Object Using a Constructor Function
// Create a Car constructor function with properties brand, model, and year. Instantiate two car objects.

function car_123(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const car1 = new car_123("Toyota", "Corolla", 2022);
const car2 = new car_123("Honda", "Civic", 2023);

console.log("Object Using a Constructor Function : ", car1, car2);

// 10. Classes and Objects
// Exercise 13: Create a Class
// Convert the Car constructor into a class.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.brand} ,${this.model}, ${this.year}`;
  }
}

const myCar = new Car("Ford", "ford123", 2024);
console.log("Classes and Objects :", myCar.getDetails());

// 11. Object Freezing and Sealing
// Exercise 14: Prevent Modification
// Use Object.freeze() and Object.seal() to control modifications.

const obj = { age: 22, dep: "cse" };
Object.freeze(obj);
obj.age = 23;
console.log(" Object Freezing  :", obj); // not Modified ,read only

const obj2 = { age: 22, city: "theni" };
Object.seal(obj2);
obj2.age = 20;
obj2["dep"] = "cse";
delete obj2.city;
console.log(" Object Sealing ", obj2); //only update

// 12. JSON and Object Conversion
// Exercise 15: Convert Object to JSON
// Convert person into a JSON string and then parse it back to an object.

const jsonString = JSON.stringify(person_123);
console.log("Convert Object to JSON :", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("JSON string and then parse it back to an object :", parsedObject);

// 13. Object References and Cloning
// Exercise 16: Shallow vs. Deep Copy
// Create a nested object and clone it using JSON.parse(JSON.stringify()).

const nestedObject = {
  user: { name: "hari", age: 22 },
};

const deepCopy = JSON.parse(JSON.stringify(nestedObject));
deepCopy.user.name = "vicky";

console.log(nestedObject.user.name);
console.log(deepCopy.user.name);

// Exercise 17: Complex Object Manipulation
// Create an array of objects called students with properties id, name, and scores (array of numbers).

// Write a function that calculates the average score of a student.

// Find the student with the highest average score.

const students = [
  { id: 1, name: "hari", scores: [78, 85, 89] }, //84
  { id: 2, name: "vicky", scores: [92, 95, 94] }, //93
  { id: 3, name: "kamalesh", scores: [85, 90, 88] }, //87
];

const ave = (scores) => scores.reduce((acc, cv) => acc + cv, 0) / scores.length;

const topstu = students
  .map((cuval) => ({
    name: cuval.name,
    ave: ave(cuval.scores),
  }))
  .sort((a, b) => b.ave - a.ave);

console.log(topstu, "student with the highest average score :", topstu[0]);

// function getAverage(scores) {
//   return scores.reduce((acc, cv) => acc + cv, 0) / scores.length;
// }

// const topStudent = students.reduce((acc, cuval) => {
//   return getAverage(cuval.scores) > getAverage(acc.scores) ? cuval : acc;
// });

// console.log(`Top student: ,${topStudent.name}`);
