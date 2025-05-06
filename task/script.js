// String to Array of Words//

const b = "i am a beginner";
function a(val) {
  return val.split(" ");
}
console.log(a(b));

// Check String Input

const c = [];
function abc(val) {
  if (typeof val == "string") {
    return "string";
  } else {
    return "not string";
  }
}
console.log(abc(c));

// Extract Characters//

const ana = "i am a beginner";
function extract(val) {
  return val.slice(0, 7);
}
console.log(extract(ana));

//Abbreviate Name//

function abbreviate(val) {
  const res = val.trim("").split(" ");
  return res.map((val) => val.charAt(0).toUpperCase());
}
console.log(abbreviate("r hari prasath "));

//Hide Email Address//

function emailfun(val) {
  const a = val.slice(0, val.indexOf("@")).padStart(val.length, "*");
  // const ans=val.split(/@/i)
  // const a=ans[1].padStart(val.length,"*")
  return a;
}
console.log(emailfun("hari@gmail.com"));

// Insert in String //

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

// Capitalize First Letter //

function firstCap(val) {
  const a = val.split(" ");
  return a.map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join(" ");
}
console.log(firstCap("hi hello everyone"));

// Camelize String//

function camelFunc(val) {
  const ans = val.split(" ");
  return ans.map((val) => val.charAt(0).toUpperCase() + val.slice(1)).join("");
}
console.log(camelFunc("hello function"));

// Uncamelize String//

function camelFunc(val, space) {
  const ans = val.replace(/[A-Z]/g, (match) => space + match.toLowerCase());
  return ans;
}
console.log(camelFunc("helloWorld", "_"));

// Repeat String

function repfun(val, n) {
  if (val.repeat(n) == 0) {
    return val.repeat(1);
  } else {
    return val.repeat(n);
  }
}
console.log(repfun("Ha", 3));

//  Chop String into Chunks

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

//Count Substring Occurrences

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

//Pad String to Length//

function padFun(len,val,padRorL){
  if(padRorL=="S"){
    return val.padStart(len,"0")
       
  }
  if(padRorL=="E"){
      return   val.padEnd(len,"0")
  }
}
console.log(padFun(5,"java","E"))

// Substring After Character
