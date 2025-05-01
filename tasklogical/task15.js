// 1) Array: Remove Duplicates

const arr = [1, 2, 2, 3, 4, 4, 5];

const demo=[];
    for(let i=0;i<arr.length;i++){
        if(!demo.includes(arr[i])){
        demo.push(arr[i]);
        }
    }

console.log(demo);

// function dubli(val){
//     const ans=  new Set(val)
//     return ans;
// }

// console.log(dubli(arr));


// 2) Object: Count Character Frequency

const str = "hello hari";

const freq={}

function singlechar(val){
    console.log(val,"valllllllllll")
    for(let char of val){
        if(freq[char]){
            freq[char]++
        }else{
        freq[char]=1
    }}
    return freq;
}
console.log(singlechar(str))

// 3. Array of Objects: Group by Property

const people = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
  ];
  // {
  //   20: [{name: 'Alice', age: 20}, {name: 'Charlie', age: 20}],
  //   30: [{name: 'Bob', age: 30}]
  // }
  
//   const ans1={};
  
//   for (const person of people) {
//     const age = person["age"];
  
//     if (!ans1[age]) {
//       ans1[age] = [];
//     }
//     ans1[age].push(person);
//   }
  
//   console.log(ans1);

const ans1 = people.reduce((acc, cv) => {
    acc[cv.age] = acc[cv.age] || [];
    acc[cv.age].push(cv); 
    return acc;
  }, {});
  
  console.log(ans1);




// Array squared

//   const input = [1, 2, 3, 4, 5];
// // output=[1, 4, 9, 16, 25];

// const ans=input.map(cv =>Math.pow(cv,2))
// console.log(ans)


// Sum of every positive element

// const input = [1, -4, 12, 0, -3, 29, -150];

// // const ans = input.reduce((acc, cv) =>{ 
// if (cv > 0) {
// //   return acc + cv 
// // }
// // return acc
// // }, 0)

// const ans = input.reduce((acc, cv) => cv > 0 ? acc + cv : acc, 0);


// console.log(ans)


function fibo(n){
    let store=[];
    for(let i=0;i<n;i++){
        if(i===0){
            store.push(0)
        }
        else if(i===1){
            store.push(1)
        }
        else{
            store.push(store[i-1]+store[i-2])
        }
    }
      return store
}
console.log(fibo(10))



