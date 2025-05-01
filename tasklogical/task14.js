// Array squared
// Square the value of every element in the array. Presume that you will only get numbers in the input array.

// Input

// const input = [1, 2, 3, 4, 5];
// Result

// [1, 4, 9, 16, 25];
console.log("Task-14");

const num = [1, 2, 3, 4, 5];

const res1 = num.map((acc) => Math.pow(acc, 2));
console.log(res1);

// Sum of every positive element
// Input

// const input = [1, -4, 12, 0, -3, 29, -150];
// Result

// 42;

const input1 = [1, -4, 12, 0, -3, 29, -150];

const res2 = input1.filter((val) => val > 0);
console.log(res2, "=============>");
const res3 = res2.reduce((acc, val) => acc + val);
console.log(res3, "=================>ans");

// const arr1 = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
//   ];

//   const arr2 = [
//     { id: 1, age: 25 },
//     { id: 2, age: 30 }
//   ];

//   console.log(mergeArrays(arr1, arr2, "id"));
//   /*
//   [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 }
//   ]
//   */

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
];



// function mergeArrays(val1, val2, role) {
//   const merge = [...val1];
//   merge.push(arr2);

//   console.log(merge);
//   const empt = [];

//   const merge = [];
//   const ans = [];
//   merge.push(val1);
//   merge.push(val2);
//   console.log(merge, "=================================>mer");
//   for (let i = 0; i < val1.length; i++) {
//     const empty = [];
//     empty.push({
//       ...val1(i),
//       ...val2(i),
//     });
//     console.log(empty);

// const r1 = merge.filter((val) => val[merge][x] === "role");
// console.log(r1, "---------------------");

// if (!ans[merge[x]]) {
//   ans[merge[x]] = [];
// }
// ans.push(merge[x]);
// console.log(ans, "============>/////");
//   }
// }

// foreach method

// function mergeArrays(v1, v2, r1) {
//   s1 = [];
//   v1.forEach((val) => {
//     const a1 = v2.find((val2) => val2[r1] === val[r1]);
//     s1.push(a1 ? { ...val, ...a1 } : val);
//   });
//   console.log(s1);
// }
// mergeArrays(arr1, arr2, "id");

// function mergeArrays(val11, val2, role) {
//   let merge = val11.reduce((acc, cv) => {
//     let arraynum = val2.find((val) => val[role] === cv[role]);
//     acc.push(arraynum ? { ...cv, ...arraynum } : cv);
//     return acc;
//   }, []);

//   console.log(merge, "====================?");
// }

// mergeArrays(arr1, arr2, "id");



// function objectToArray(val) {
//   const s1 = [];
//   const s2 = [];
//   s1.push(val);
//   // console.log(s1, "===================>array");

//   for (let i = 0; i < s1.length; i++) {
//     const [key, value] = s1;
//     s1[key] = s1;
//     console.log("============>objecttttttt", s1);

//     console.log(key, "keyyyyyyyyyyyy");
//     console.log(value, "valllllllllllll");

//     console.log(s1, "==demo");

//     const results1 = s1.reduce((accc, cval) => {
//       accc[cval[i]] = s1[i];
//     }, []);
//     console.log(results1, "--------------->anssssssssssssssss");

//     // s2.push(results1);
//   }

// const { key, value } = val;
// s1[key] = value;
// console.log(s1);

// const modify = Array(data123);
// console.log(modify,"obkkk");
// const stores = [];

// for (let mod in modify) {
//   stores.push(modify[mod]);

//   console.log(stores, "keyyyyyyyyyyy");

//   const arrayofobj = modify.reduce((acc, cvalue) => {
//     const cans=modify.filter((val))=>val[mod]==mod
//     acc.push(cvalue);
//   }, []);
//  }
// }

// console.log("==========>", objectToArray(data123));
const data123 = { name: "Alice", age: 25, city: "New York" };
function objectToArray(val) {

  
  const modifyedvalue = Array(val);
  // modifyedvalue.forEach((num) => {
  //   console.log(num);
  // });
  const [key, value] = modifyedvalue;
  console.log(value);
}
console.log("==========>", objectToArray(data123));
// /*
// [
//   ["name", "Alice"],
//   ["age", 25],
//   ["city", "New York"]
// ]
// */
