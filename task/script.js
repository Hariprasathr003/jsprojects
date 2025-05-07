// 1) String to Array of Words//

const b = "i am a beginner";
function a(val) {
  return val.split(" ");
}
console.log(a(b));

// 2) Check String Input

const c = [];
function abc(val) {
  if (typeof val == "string") {
    return "string";
  } else {
    return "not string";
  }
}
console.log(abc(c));

// 3) Extract Characters//

const ana = "i am a beginner";
function extract(val) {
  return val.slice(0, 7);
}
console.log(extract(ana));

//4) Abbreviate Name//

function abbreviate(val) {
  const res = val.trim("").split(" ");
  return res.map((val) => val.charAt(0).toUpperCase());
}
console.log(abbreviate("r hari prasath "));

//5) Hide Email Address//

function emailfun(val) {
  const a = val.slice(0, val.indexOf("@")).padStart(val.length, "*");
  // const ans=val.split(/@/i)
  // const a=ans[1].padStart(val.length,"*")
  return a;
}
console.log(emailfun("hari@gmail.com"));

//6)  Insert in String //

// function insert(indval,val=0,index=0){
//   const a= indval.split(" ")

//   // const b=a.join(" ")
//   // console.log(b)

//   const c=val + a

//   const e=indval.replace(c.charAt(index),val)

//   console.log(e,"aaaa")

//   return e

// }
// console.log(insert("hi everyone all of you","hello",1))

function truncateFunction(value, insert, index) {
  if (insert == undefined) {
    insert = "";
  } else if (index == undefined) {
    index = 0;
  }
  console.log(value.slice(0, index) + insert + value.slice(index));
  // return value.slice(0,index) + insert.replace(index.length,"...") + insert(index)
}
console.log(truncateFunction("We are doing JS string exercises.", "hi", 23));

//7) Capitalize First Letter //

function firstCap(val) {
  const a = val.split(" ");
  return a.map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join(" ");
}
console.log(firstCap("hi hello everyone"));

//8) Camelize String//

function camelFunc(val) {
  const ans = val.split(" ");
  return ans.map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join("");
}
console.log(camelFunc("hello function"));

//9) Uncamelize String//

function camelFunc(val, space) {
  const ans = val.replace(/[A-Z]/g, (match) => space + match.toLowerCase());
  return ans;
}
console.log(camelFunc("helloWorld", "_"));

//10) Repeat String//

function repfun(val, n) {
  if (val.repeat(n) == 0) {
    return val.repeat(1);
  } else {
    return val.repeat(n);
  }
}
console.log(repfun("Ha", 3));

// 11) Chop String into Chunks//

function chopfun(val, num) {
  const str = [];
  if (num === undefined) {
    return val;
  }

  for (let i = 0; i < val.length; i += num) {
    const ans = val.slice(i, i + num);
    str.push(ans);
  }
  return str;
}
console.log(chopfun("w3resource", 2));

//12) Count Substring Occurrences//

function countFun(val, check) {
  const arr = val.split(" ");
  const ans = arr.map((val) => val.toLowerCase());
  // console.log(ans)
  if (check == undefined) {
    return ans.join(" ");
  }
  let count = 0;
  const checkval = check.toLowerCase();
  for (let i = 0; i <= ans.length; i++) {
    // console.log(ans[i])
    if (checkval.includes(ans[i])) {
      count++;
    }
  }
  return count;
}
console.log(countFun("The quick brown fox jumps over the lazy dog", "The"));

// 13) Pad String to Length//

function padFun(len, val, padRorL) {
  if (padRorL == "S") {
    return val.padStart(len, "0");
  }
  if (padRorL == "E") {
    return val.padEnd(len, "0");
  }
}
console.log(padFun(5, "java", "E"));

//14) Substring After Character//

function aftFun(val, spl, isaftbef) {
  const index = val.indexOf(spl);

  if (isaftbef === "a") {
    return val.slice(index);
  } else if (isaftbef === "b") {
    return val.slice(0, index);
  }

  return val;
}

console.log(aftFun("hi hello! javaScript World ", "!", "b"));

//15) Trim Spaces//

function trimFun(val) {
  return val.trim("");
}
console.log(trimFun("  hello"));

// 16) Truncate by Words//

function truFun(val, len) {
  const ans = val.split(" ");
  // console.log(ans)
  const res = ans.slice(0, len);
  // console.log(res.join(" "))
  return res.join(" ");
}
console.log(truFun("The quick brown fox jumps over the lazy dog", 6));

//17) Alphabetize String//

function alpha(val) {
  const res = val.toLowerCase();
  const ans = res.split("").sort().join(" ");
  return ans;
}
console.log(alpha("United States"));

//18) Find Word in String //

function findFun(val, find) {
  const ans = val.split(",");
  // let count=0
  // for(let i=0;i<ans.length;i++){
  //     console.log(ans[i])
  //     if(ans[i].includes(find)){
  //         count++
  //     }
  // }
  //  return count
  const res = ans.reduce((acc, val) => {
    if (val.includes(find)) {
      acc++;
    }
    return acc;
  }, 0);

  return res;

  // console.log(res,"pppppp")
}
console.log(findFun("aa, bb, cc, dd, aa, aa", "aa"));

//19)  Remove Non-Word Characters

function removeFun(val) {
  const ans = val.replace(/[^a-zA-Z]/g, "");
  return ans;
}
console.log(removeFun("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));

//20) Rearrange to Palindrom//

function poliFun(val) {
  if (typeof val !== "string") {
    return "It must be a string.";
  }
  const res = val.split("").reverse().join("");
  return res === val;
}
console.log(poliFun("civic"));

//21) Frequent Character //

function freqFun(val) {
  let freq = {};
  for (let i in val) {
    // console.log(val[i])
    freq[i] = val[i];
  }
  return freq;
}
console.log(freqFun("asdfgasd"));

//22)Most Frequent Character//

function freqFun(val) {
  if (typeof val !== "string") {
    return "It must be a string";
  }
  let freq = {};
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    let charval = val[i];
    // console.log(char)
    freq[charval] = (freq[charval] || 0) + 1;
    // console.log(freq)
    if (freq[charval] > count) {
      count = freq[charval];
    }
  }
  return count;
}
console.log(freqFun("asdfgasd"));

function freqFun(val) {
  if (typeof val !== "string") {
    return "It must be a string";
  }
  //   let freq = {};
  const res = val.split("");
  //   console.log(res,"sppppp")
  const ans = res.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return ans;
  //   for (let i = 0; i < val.length; i++) {
  //     let charval = val[i];
  //     freq[charval] = (freq[charval] || 0) + 1;
  //   }
  //   console.log(freq)
  //   return freq
}
console.log(freqFun("asdfgasd"));

//  Input: [0, 1, 0, 3, 12]
// // Output: [1, 3, 12, 0, 0]

//23 sort and zero to last to set
function sorFun(val) {
  const findzero = [];
  const ans = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] === 0) {
      findzero.push(val[i]);
    } else {
      ans.push(val[i]);
    }
  }
  ans.sort((a, b) => a - b);
  const res = ans.concat(findzero);

  console.log(findzero, "ppppp");
  console.log(ans, "ooo");
  return res;
}
console.log(sorFun(input));

//24 find target element index

const a = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 67];
const target = 30;
function targetFun(val, target) {
  for (let i = 0; i < val.length; i++) {
    for (let j = i + 1; j < val.length; j++) {
      if (val[i] + val[j] === target) return [i, j];
    }
  }
}
console.log(targetFun(a, target));

//25 Check Array Input
function checkArray(val) {
  return Array.isArray(val);
}
console.log(checkArray([1, 2]));

//26  First Elements of Array

function firstEle(val,len){
  if(len==null){
      return val[0]
  }
  if(len<0){
      return []
  }
  const ans=val.slice(0,len)
  return ans
} 
console.log(firstEle([7, 9, 0, -2]));

console.log(firstEle([],3));

console.log(firstEle([7, 9, 0, -2],3));

console.log(firstEle([7, 9, 0, -2],6));

console.log(firstEle([7, 9, 0, -2],-3));

//27 Last Elements of Array

function lastEle(val,len){
  if(len==null){
      return  val.pop()
  }
  if(len>val.length){
      return val
  }
  for(let i=val.length-1;i>0;i--){
         const ans=val.slice(val.length-len)
         return ans
  }
} 
console.log(lastEle([7, 9, 0, -2]));
console.log(lastEle([7, 9, 0, -2],3));
console.log(lastEle([7, 9, 0, -2],6));

//28)Join Array Elements
function joinFun(val,joinval){
  const join=val.join(joinval)
  return join
}
  const mycolor = ["Red", "Green", "White", "Black"];
console.log(joinFun(mycolor,"!"))

//29)Insert Dashes Between Evens

function iseven(val){
  let res="";
  for(let i=0;i<val.length;i++){
      res +=val[i]
  if(val[i+1]%2==0){
res += '-';
  }
  }
  return res
}
console.log(iseven([0,2,5,7,6,9,10]))

// 30)Sort Array

const  arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
function sortFun(val){
    val.sort((a,b)=>a-b)
    return val
}
console.log(sortFun(arr1))


// 31)Most Frequent Array Item

const arr2=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function freqFun(val,check){
    let count=0;
    for(let i=0;i<val.length;i++){
        if(val[i]===check){
            count++
        }
    }
    
    return  ` "${check}" : ${count}`
}
console.log(freqFun(arr2,"a"))

// 32)Swap Case in String

const a = "The Quick Brown Fox";

function swapFun(val) {
    const res = val.split("");
    const ans=res.map(val=>val===val.toUpperCase()? val.toLowerCase() : val.toUpperCase())
    // console.log(ans)
    return ans.join("")
}

console.log(swapFun(a)); 

//33) Print Nested Array Elements

const abc = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]
function nestFun(val){
for(let i in val){
    console.log("row ",i)
    for(let j in val[i]){
        console.log(val[i][j])
    }
}
}
console.log(nestFun(abc))

// 34)Sum of Squares in Array

function sumofFun(val){
  let store=0
  for(let i=0;i<val.length;i++){
      let power = Math.pow(val[i],2)
      store +=power
      // console.log(store)
  }
  return store
}
const sum=[1,2,3,3];
console.log(sumofFun(sum))


//35) Sum and Product of Array

function sumProdFun(val){
  let sum=0
  let product =1;
  for(let i=0;i<val.length;i++){
      product *=val[i]
      sum +=val[i]
  }
  return `"product" : ${product} , "sum" :${sum}`
}
console.log(sumProdFun([1,2,3,4]))
