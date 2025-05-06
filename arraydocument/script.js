// Basic Array Methods

//Array length//
//des:length of total array value
//return: number
//example
// let arr = [1, 2];
// let len = arr.length
// console.log(len);
//output : 2

//Array toString()//
//des:array to covert string value
//return:string
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
//des:delete to the  particular array element empty/undefined
//return:true (but array length doesn’t change)
//example
// let str=["vicky","kamalesh","sunil"]
// console.log(delete str[1])
//output: true

//Array concat()//
//des:merging array
//return:return new array value
//example
// let str=["vicky","kamalesh","sunil"]
// let str2=["jayahari","vasanth","rajesh"]
// console.log(str.concat(str2))
//output:[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ]

//Array copyWithin(position,start,end)//
//des: copyWithin the array another position and overwrites the existing values
//return :modifi the array and length not change in original value 
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
//des:add and remove to the array in specific position
//return:removed elements
//example
// let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ]
// console.log(str.splice(0,2,4))
// output:[ 'sunil', 'jayahari', 'sunil', 'jayahari', 'vasanth', 'rajesh' ]

//toSpliced(index,del)//
//des: return a new array modifying the specified items.
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
//des:indexof value is true to return first position to the index number
//return:index number or not found -1 return
//example
// let str=[ 'vicky', 'kamalesh', 'sunil', 'jayahari', 'vasanth', 'rajesh' ]
// console.log(str.indexOf("rajesh"))
// output:5

//Array lastIndexOf()//
//des:lastindexof value is true to return last position to the lastindex of number
//return:index number or  not found -1 return
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
//return : first matching element and not found undefined
//example
// let str=[ 15,30,35,20,25]
// const ans=str.find(val=>val>=25)
// console.log(ans)
// output:30

// Array findIndex()//
//des:findindex to the  condition to first element to pass
//return :Index of the first/last match, or -1 if not found
//example
// let str=[ 15,30,35,20,25]
// const ans=str.findIndex(val=>val>=25)
// console.log(ans)
// output:1

//Array findLast()//
//des:findLast to the  condition to last element to pass
//return :new array and undefined if not found.
//example
// let str=[ 15,30,35,20,25]
// const ans=str.findLast(val=>val>=25)
// console.log(ans)
// output:25

//Array findLastIndex()//
//des:findLastIndex to the  condition to last element to pass
//return :new array and index position and -1 if not found.
//example
// let str=[ 15,30,35,20,25]
// const ans=str.findLastIndex(val=>val>=25)
// console.log(ans)
// output:4

//Array Sort Methods//

// Array sort() //
//des:sort to the alphabetically
//return :Sorted new array
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
//return : Reversed new array
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
//des:minimum value find of numeric and usage with apply-You can also use the spread operator:
//return minimu value element
//example
// const points = [40, 100, 5, 25, 10];
// const ans=Math.min.apply(null,points)
// console.log(Math.min(...points)); 
// console.log(ans)
// output:5

// Math.max()//
//des:maximum value find of numeric and usage with apply-You can also use the spread operator:
//return maximum value of element
//example
// const points = [40, 100, 5, 25, 10];
// const ans=Math.max.apply(null,points)
// console.log(Math.max(...points));
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

// Array Iteration Methods //

//Array forEach(item,index,itself)//
//des:Executes a provided function once for each array element does not return a new array
//return: undefined
//example
//const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(val=>
//   console.log(val*2))
//   output:90
//   8
//   18
//   32
//   50

//Array map() //
//des:not modify to the original array
//return : new array
//example:
// const a=[1,2,3,4,5]
// const n=a.map(val=>val*2)
// console.log(n)
// output:[ 2, 4, 6, 8, 10 ]

//Array flatMap()
//des:creates to the new array and flating to the array
//return:new array
//example:
// const a=[1,2,3,4,5]
// const n=a.flatMap(val=>[val,val*2])
// console.log(n)
// output:[
//   1, 2, 2, 4,  3,
//   6, 4, 8, 5, 10
// ]

//Array filter()//
//des:not modify to the original array  and filter to the condition
//return :array
//example:
// const a=[1,2,3,4,5]
// const n=a.filter(val=>val%2===0)
// console.log(n)
// output:[ 2, 4]

// Array reduce() //
//des:reduce to the particular value
//return:single value
//example:
// const a=[1,2,3,4,5]
// const n=a.reduce((acc,val)=>acc+val,0)
// console.log(n)
// output:15

//Array reduceRight() //
//des: reduce method using to the right to left order
//return single value
//example:
// const a=[1,2,3,4,5]
// const n=a.reduceRight((acc,val)=>acc+val,0)
// console.log(n)
// output:15

//Array every()//
//des :every method using to the all condition is true
//return:boolean
//example:
// const a=[3,4,3,4,5]
// const n=a.every(val=>val>2)
// console.log(n)
// output:true

//Array some() //
//des:some method used to any one condition true
//return:boolean
//example:
// const a=[2,1,1,0,3]
// const n=a.some(val=>val>2)
// console.log(n)
// output:true

// Array from() //
//des:any value to convert object to iterate
//return:iterate
//example:
// const a=["abcdeg"]
// const n=Array.from("abcdeg")
//output:[ 'a', 'b', 'c', 'd', 'e', 'g' ]
// const n=Array.from(a)
// console.log(n)
// output:[ 'abcdeg' ]

// Array with() Method//
// des:modify to the particular index value
//return:array
//example:
// const a=["vicky","kamalesh","sunil"]
// const b=a.with(2,"sunilkumar")
// console.log(b)
//output:[ 'vicky', 'kamalesh', 'sunilkumar' ]

//Array Spread (...)//
// des:spread to the all value in another variable
//return:array
// example:
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Des"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)
// output:[
//   'Jan', 'Feb', 'Mar',
//   'Apr', 'May', 'Jun',
//   'Jul', 'Aug', 'Sep',
//   'Oct', 'Nov', 'Des'
// ]











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

function isarray(val) {
  return Array.isArray(val);
}
const a = [1, 2, 3];
console.log(isarray(a));
