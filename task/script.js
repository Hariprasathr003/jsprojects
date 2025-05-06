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

function poliFun(val){
  if(typeof(val) !== "string"){
      return "It must be a string."
  }
  const res=val.split("").reverse().join("")
  return res === val
}
console.log(poliFun("civic"))

//21) Frequent Character //

function freqFun(val){
  let freq={};
  for(let i in val){
      // console.log(val[i])
      freq[i]=val[i]
  }
  return freq
}
console.log(freqFun("asdfgasd"))

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
