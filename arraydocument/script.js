// Basic Array Methods

//Array length//
//des:length of total array value
//return number
//example
// let arr = [1, 2];
// let len = arr.length
// console.log(len);
//output : 2

//Array toString()//
//des:array to covert string value
//return string
//example
// let str=["vicky","kamalesh"]
// console.log(str.toString())
// output :vicky,kamalesh

//Array at()//
//des :array index value  from array element
//return :array element
//example
// let str=["vicky","kamalesh","sunil"]
// console.log(str.at(2))  //at[2]
// output :sunil

// Array join() //
//des:join particular expression in array value
//return:string
//example
// let str=["vicky","kamalesh","sunil"]
// console.log(str.join("-") )
//output:vicky-kamalesh-sunil

//Array pop()//
//des:last element to remove in array
//return:remove to original array
//example
// let str=["vicky","kamalesh","sunil"]
// console.log(str.pop())
//output:sunil

//Array push()//
//des:add a new element in last value
//return:new length of array value number
//example
// let str=["vicky","kamalesh"]
// console.log(str.push("sunil"))
//output:3

//Array shift()//
//des:remove a first element in array
//return:remove to original array
//example
// let str=["vicky","kamalesh","sunil"]
// console.log(str.shift())
//output:vicky

//Array unshift()//
//des:add a first element in array
//return:new length of array value number
//example
// let str=["vicky","kamalesh"]
// console.log(str.unshift("vicky"))
//output:3

//Array delete()//
//des:delete to the  particular array element
//return:del to return Boolean value and this index was empty only del in value
//example
// let str=["vicky","kamalesh","sunil"]
// console.log(delete str[1])
//output: true

//Array concat()//
//des:merging array 
//return:return array value
//example
// let str=["vicky","kamalesh","sunil"]
// let str2=["jayahari","vasanth","rajesh"]
// console.log(str.concat(str2))
//output:[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 

//Array copyWithin(position,start,end)//
//des: copyWithin the array another position and overwrites the existing values
//return :array not change original value length
//example
// let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.copyWithin(0,2,4))
// output:[ 'sunil', 'jayahari', 'sunil', 'jayahari', 'vasanth', 'rajesh' ]

//Array flat()//
//des:flat array is concatenated  to the sub array
//return:new array
//const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr)
// output:[ 1, 2, 3, 4, 5, 6 ]

//Array flatMap()//
//des: flatMap()  first maps all elements of an array and then creates a new array.
//return:new array
//example
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr)
// output:[
//    1, 10,  2, 20,  3,
//    30,  4, 40,  5, 50,
//     6, 60
//  ]

//Array splice(index,del,add item)//
//des:add and remove to the array
//return:new array
//example
// let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.splice(0,2,4))
// output:[ 'sunil', 'jayahari', 'sunil', 'jayahari', 'vasanth', 'rajesh' ]


//toSpliced(index,del)//
//des: remove to the array
//return:new array
//example
// let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.toSpliced(2,1))
// output:[ 'vicky', 'kamalesh', 'jayahari', 'vasanth', 'rajesh' ]

//Array slice()
//des:start and end index value to exterct to the new array
//return:new array and not modify original array
//example
 // let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.slice(1,5))
// output:[ 'kamalesh', 'sunil', 'jayahari', 'vasanth' ]


// JavaScript Array Search //

//Array indexOf()//
//des:indexof value is true to return position to the index number
//return:index number
//example
// let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.indexOf("rajesh"))
// output:5

//Array lastIndexOf()//
//des:lastindexof value is true to return position to the lastindex of number
//return:index number
//example
// let str=[ 'vicky',"rajesh", 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.lastIndexOf("rajesh"))
// output:6

//Array includes()//
//des:check to the array value 
//return:boolean value
//example
// let str=[ 'vicky',"rajesh", 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// console.log(str.includes("kamalesh"))
// output:true

//Array find()//
//des:find to the  condition to first element to pass
//return :new array
//example
// let str=[ 15,30,35,20,25] 
// const ans=str.find(val=>val>=25) 
// console.log(ans)
// output:30

// Array findIndex()//
//des:findindex to the  condition to first element to pass
//return :new array and index position
//example
// let str=[ 15,30,35,20,25] 
// const ans=str.findIndex(val=>val>=25) 
// console.log(ans)
// output:1

//Array findLast()//
//des:findLast to the  condition to last element to pass
//return :new array and array value
//example
// let str=[ 15,30,35,20,25] 
// const ans=str.findLast(val=>val>=25) 
// console.log(ans)
// output:25

//Array findLastIndex()//
//des:findLastIndex to the  condition to last element to pass
//return :new array and index position
//example
// let str=[ 15,30,35,20,25] 
// const ans=str.findLastIndex(val=>val>=25) 
// console.log(ans)
// output:4

//Array Sort Methods//

// Array sort() //
//des:sort to the alphabetically
//return :new array
//example
// let str=[ 'vicky',"rajesh", 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ] 
// const ans=str.sort() 
// console.log(ans)
// output:[
//   'jayahari', 'kamalesh',
//   'rajesh',   'rajesh',
//   'sunil',    'vasanth',
//   'vicky'
// ]

//Array reverse()//

//des:reverse to the element of the array
//return :new array
//example
// let str=[
//   'jayahari', 'kamalesh',
//   'rajesh',   'rajesh',
//   'sunil',    'vasanth',
//   'vicky'
// ] 
// const ans=str.reverse() 
// console.log(ans)
// output:[
//   'vicky',    'vasanth',
//   'sunil',    'rajesh',
//   'rajesh',   'kamalesh',
//   'jayahari'
// ]

//Sorting Object Arrays//
//des:sort to the array of object in key to sort
//return:new array
//example
// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];
// const ans=cars.sort((a,b)=>a.year-b.year)
// console.log(ans)
// output:[
//   { type: 'Saab', year: 2001 },
//   { type: 'BMW', year: 2010 },
//   { type: 'Volvo', year: 2016 }
// ]

//Numeric Sort//
//des:sort to the array of Numeric value 
//return:new array
//example
// const points = [40, 100, 1, 5, 25, 10];
// const ans=points.sort((a,b)=>a-b) //asen
// console.log(ans)
// output:[ 1, 5, 10, 25, 40, 100 ]

// Math.min()//
//des:minimum value find of numeric value using apply
//return minimu value element
//example
// const points = [40, 100, 5, 25, 10];
// const ans=Math.min.apply(null,points) 
// console.log(ans)
// output:5

// Math.max()//
//des:maximum value find of numeric value using apply
//return maximum value of element
//example
// const points = [40, 100, 5, 25, 10];
// const ans=Math.max.apply(null,points) 
// console.log(ans)
// output:100

//Random Sort//
//des:random value to sort in array element
//retur :random array element
//example
// const points = [40, 100, 1, 5, 25, 10];
// const ans=points.sort(()=> 0.5 - Math.random());
// console.log(ans)
// output:[ 5, 100, 10, 40, 1, 25 ]






















// Add item to the end of array

const nameval = ["hari", "vicky"];
nameval.push("kamalesh");
console.log(nameval, "Add item to the end of array");

//  Remove item from the end

console.log(nameval.pop(), "Remove item from the end");

// Add item to the beginning

console.log(nameval.unshift("vicky"), "Add item to the beginning");

// Remove item from the beginning

console.log(nameval.shift("vicky"), "Remove item from the beginning");

// Get total number of items
console.log(nameval.length, " total number of items");

// Find index of an item

console.log(nameval.indexOf("vicky"));

//Check if array contains a value

console.log(nameval.includes("vicky"));

// Convert array to string

console.log(nameval.join(" ,"));

// Merge two arrays

const nameval1 = ["sunil", "rajesh"];
console.log(nameval.concat(nameval1));

//Extract a portion without modifying original

const mod = nameval.slice(1);
console.log(mod);

// Add/remove items and modifies original

const modify = nameval.splice(1, 1, "sakithi");
console.log(modify, nameval);

// Loop through array (no return)

nameval.forEach((val) => {
  console.log(val);
});

// Transform array and return new array

const ans = nameval.map((val) => val);
console.log(ans);

// Check array Input

function isarray(val){
  return Array.isArray(val)
  }
  const a=[1,2,3]
  console.log(isarray(a))