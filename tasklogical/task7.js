// const data = [
//     { name: "Alice", role: "developer" },
//     { name: "Bob", role: "manager" },
//     { name: "Charlie", role: "developer" },
//   ];

//   console.log(groupBy(data, "role"));

//   output
//   {
//     developer: [{ name: "Alice", role: "developer" }, { name: "Charlie", role: "developer" }],
//     manager: [{ name: "Bob", role: "manager" }]
//   }
console.log("TASK7");

const data = [
  { name: "Alice", role: "developer" },
  { name: "Bob", role: "manager" },
  { name: "Charlie", role: "developer" },
];

//foreach loop

// function groupBy(val, key) {
//   const store = {};

//   val.forEach((obj) => {
//     // console.log(obj, "Obj ");

//     // console.log(obj[key], "Obj of key");

//     if (!store[obj[key]]) {
//       store[obj[key]] = [];

//       // store[obj[key]].push(obj);

//       // console.log(store, "Store in if block");
//     }
//     store[obj[key]].push(obj);
//     // console.log(store, "else store");
//   });
//   return store;
// }

// // // reduce methode

// function groupBy(val, key) {
//   return val.reduce((store, obj) => {
//     if (!store[obj[key]]) {
//       store[obj[key]] = [];
//     }
//     store[obj[key]].push(obj);
//     return store;
//   }, {});
// }

// for loop

function groupBy(val, key) {
  const store = {};
  for (let i = 0; i < val.length; i++) {
    // console.log(val[i], "rrrrr");
    // console.log(val[i][key], "keyyaccess");

    if (!store[val[i][key]]) {
      store[val[i][key]] = [];
    }
    
    store[val[i][key]].push(val[i]);
  }
  return store;
}

console.log(groupBy(data, "role"));
