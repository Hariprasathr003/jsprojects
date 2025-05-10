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

function firstEle(val, len) {
  if (len == null) {
    return val[0];
  }
  if (len < 0) {
    return [];
  }
  const ans = val.slice(0, len);
  return ans;
}
console.log(firstEle([7, 9, 0, -2]));

console.log(firstEle([], 3));

console.log(firstEle([7, 9, 0, -2], 3));

console.log(firstEle([7, 9, 0, -2], 6));

console.log(firstEle([7, 9, 0, -2], -3));

//27 Last Elements of Array

function lastEle(val, len) {
  if (len == null) {
    return val.pop();
  }
  if (len > val.length) {
    return val;
  }
  for (let i = val.length - 1; i > 0; i--) {
    const ans = val.slice(val.length - len);
    return ans;
  }
}
console.log(lastEle([7, 9, 0, -2]));
console.log(lastEle([7, 9, 0, -2], 3));
console.log(lastEle([7, 9, 0, -2], 6));

//28)Join Array Elements
function joinFun(val, joinval) {
  const join = val.join(joinval);
  return join;
}
const mycolor = ["Red", "Green", "White", "Black"];
console.log(joinFun(mycolor, "!"));

//29)Insert Dashes Between Evens

function iseven(val) {
  let res = "";
  for (let i = 0; i < val.length; i++) {
    res += val[i];
    if (val[i + 1] % 2 == 0) {
      res += "-";
    }
  }
  return res;
}
console.log(iseven([0, 2, 5, 7, 6, 9, 10]));

// 30)Sort Array

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
function sortFun(val) {
  val.sort((a, b) => a - b);
  return val;
}
console.log(sortFun(arr1));

// 31)Most Frequent Array Item

const arr2 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function freqFun(val, check) {
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] === check) {
      count++;
    }
  }

  return ` "${check}" : ${count}`;
}
console.log(freqFun(arr2, "a"));

// 32)Swap Case in String

const a = "The Quick Brown Fox";

function swapFun(val) {
  const res = val.split("");
  const ans = res.map((val) =>
    val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
  );
  // console.log(ans)
  return ans.join("");
}

console.log(swapFun(a));

//33) Print Nested Array Elements

const abc = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
function nestFun(val) {
  for (let i in val) {
    console.log("row ", i);
    for (let j in val[i]) {
      console.log(val[i][j]);
    }
  }
}
console.log(nestFun(abc));

// 34)Sum of Squares in Array

function sumofFun(val) {
  let store = 0;
  for (let i = 0; i < val.length; i++) {
    let power = Math.pow(val[i], 2);
    store += power;
    // console.log(store)
  }
  return store;
}
const sum = [1, 2, 3, 3];
console.log(sumofFun(sum));

//35) Sum and Product of Array

function sumProdFun(val) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < val.length; i++) {
    product *= val[i];
    sum += val[i];
  }
  return `"product" : ${product} , "sum" :${sum}`;
}
console.log(sumProdFun([1, 2, 3, 4]));

// interview questions

// 1)reverse

function revFun(val) {
  let rev = "";
  for (let i = val.length - 1; i >= 0; i--) {
    rev += val[i];
  }
  return rev;
}
console.log(revFun("java"));

//2)Check for palindrome
function revFun(val) {
  const rev = val.split("").reverse().join("");
  return rev === val ? "poly" : "not poly";
}
console.log(revFun("mom"));
//3)Find the factorial of a number

function fact(val) {
  let a = 1;
  for (let i = 1; i <= val; i++) {
    a *= i;
  }
  return a;
}
console.log(fact(5));

//recursion method
function fact(val) {
  if (val === 0 || val === 1) return 1;
  return val * fact(val - 1);
}

console.log(fact(5));

//4)Fibonacci series

function fiboFun(val) {
  let store = [];
  for (let i = 0; i < val; i++) {
    if (i == 0) {
      store.push(0);
    } else if (i == 1) {
      store.push(1);
    } else {
      store.push(store[i - 1] + store[i - 2]);
    }
  }
  return store;
}
console.log(fiboFun(5));

//5)Remove duplicates from an array
function dubliFun(val) {
  let dublicate = new Set(val);
  return dublicate;
}
console.log(dubliFun([1, 2, 2, 3, 4, 4, 5]));

//6)Find the maximum number in an array

function maxFun(val) {
  const max = Math.max(...val);
  return max;
}
console.log(maxFun([5, 9, 2, 8, 1]));

// 7)Check if two strings are anagrams
function anagramFun(val1, val2) {
  const check = val1
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/)
    .split("")
    .sort()
    .join("");
  const check2 = val2
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/)
    .split("")
    .sort()
    .join("");
  if (check === check2) {
    return "anagrams";
  } else {
    return "not anagrams";
  }
}
console.log(anagramFun("listen", "silent"));

// 8)Count vowels in a string

function vowcouFun(val) {
  const vowel = "aeiou";
  let count = 0;
  val.split("");
  vowel.split("");
  // console.log(vowel)
  for (let i = 0; i < val.length; i++) {
    if (vowel.includes(val[i])) {
      count++;
    }
  }
  return count;
}
const check = "aeiou";
console.log(vowcouFun(check));

// 9) Flatten a nested array

function flatFun(val) {
  return val.flat(Infinity);
}
console.log(flatFun([1, [2, [3, 4], 5]]));

//10)Find missing number from array 1 to n

function findmiisFun(val) {
  const num = val.length + 1;
  const res = (num * (num + 1)) / 2;
  const ans = val.reduce((acc, val) => acc + val, 0);
  return res - ans;
}

const val = [1, 2, 3, 4, 5, 6, 8];
console.log(findmiisFun(val));

//11)groupby task

const a = [
  {
    name: "Hari",
    role: "Developer",
    address: {
      city: "Chennai",
      pincode: 6000123,
    },
  },
  {
    name: "Sruthi",
    role: "Business analyst",
    address: {
      city: "Mumbai",
      pincode: 6000123,
    },
  },
  {
    name: "Yamuna",
    role: "Manager",
    address: {
      city: "Chennai",
      pincode: 6000123,
    },
  },
  {
    name: "Huxly",
    role: "Developer",
    address: {
      city: "Bangalore",
      pincode: 6000123,
    },
  },
  {
    name: "Akshaya",
    role: "DevOps",
    address: {
      city: "Mumbai",
      pincode: 6000123,
    },
  },
  {
    name: "Aswin",
    role: "Manager",
    address: {
      city: "Bangalore",
      pincode: 6000123,
    },
  },
  {
    name: "Karthik",
    role: "Developer",
    address: {
      city: "Chennai",
      pincode: 6000123,
    },
  },
  {
    name: "Yamini",
    role: "Manager",
    address: {
      city: "Mumbai",
      pincode: 6000123,
    },
  },
  {
    name: "Manish",
    role: "Manager",
    address: {
      city: "Bangalore",
      pincode: 6000123,
    },
  },
];

function group(val, find, add) {
  const ans = val
    .filter((val) => val.role === find)
    .reduce((acc, val) => {
      acc[val[add].city] = acc[val[add].city] || [];
      acc[val[add].city].push(val.role, val[add]);
      //   console.log(role)
      return acc;
    }, []);
  //   console.log(ans)
  return ans;
}
console.log(group(a, "Manager", "address"));

//12)max value
const av = [99, 5, 3, 100, 1];
function maxval(val) {
  // let store=Math.max(...val)
  let store = val[0];
  for (let i = 0; i < val.length; i++) {
    if (val[i] > store) store = val[i];
  }
  return store;
}
console.log(maxval(av));

//  13)Non repeat Character
function nonRepFun(val) {
  const store = {};

  for (let i = 0; i < val.length; i++) {
    store[val[i]] = (store[val[i]] || 0) + 1;
  }
  // return store
  for (let i = 0; i < val.length; i++) {
    if (store[val[i]] === 1) {
      return val[i];
    }
  }
}

console.log(nonRepFun("hiihplloo"));

//14)debounce

function debounce(firstFun, delay) {
  let timeout;
  return function (...arugs) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      firstFun.apply(this, arugs);
    }, delay);
  };
}

function normalFun(pass) {
  console.log("HI hari", pass);
}

const ans = debounce(normalFun, 2000);
ans("how are you");

//15)prime number check

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(4));
console.log(isPrime(2));

//16)longest word in sentence

function longestWord(val) {
  const ans = val.split(" ");
  let text = "";
  //  let count=0;
  // let store = {};

  for (let i = 0; i < ans.length; i++) {
    // console.log(ans[i])

    // all freq sentence//
    // store[ans[i]]=(store[ans[i]]||0)+1

    //longest sentence in word //
    if (ans[i].length > text.length) {
      text = ans[i];
    }

    //longest sentence in number //
    // if(ans[i].length>count){
    //      count=ans[i].length
    // }
  }
  // return store
  return text; //longest sentence
  // return count   //sentence count
}

console.log(longestWord("the quick brown fox jumps over the lazy dog"));

//17) Sum All Odd Fibonacci Numbers

function fiboFun(val) {
  let store = [];
  for (let i = 0; i < val; i++) {
    // console.log(i)
    if (i == 0) {
      store.push(0);
    } else if (i == 1) {
      store.push(1);
    } else {
      store.push(store[i - 1] + store[i - 2]);
    }
  }
  const ans = store.reduce((acc, val) => acc + val, 0);

  return ans;
}
console.log(fiboFun(5));

//18) missing number

// function missFun(val,n){
//     const ans=(n*(n+1)/2)
//     const res=val.reduce((acc,val)=>acc+val,0)
//     return ans-res
//     console.log(ans)
// }
// const a=[1,2,3,5];
// console.log(missFun(a,5))

function missFun(val, n) {
  const store = [];
  for (let i = 1; i <= n; i++) {
    // for(let j=1;j<val.length;j++){
    //       // console.log(val[j])
    // // console.log(val)
    // if(val.includes(i))
    // {
    //   store.push(i)
    // }
    if (!val.includes(i)) {
      store.push(i);
    }
    // }
  }
  return store;
}
const a = [1, 2, 3, 5, 7, 9];
console.log(missFun(a, 10));

//19) isarray value is correct

const str1 = [1, 2, 3];
const str2 = [3, 2, 1];

function isTrue(str1, str2) {
  const ans = str1.every((val) => str2.includes(val));
  return ans;
}
console.log(isTrue(str1, str2));

//20) intersection in infinity param using

const st = [1, 2, 3];
const st2 = [3, 2, 0];
const st3 = [1, 0, 2];

function isTrue(...params) {
  const ans = params.reduce((acc, curr) =>
    acc.filter((val) => curr.includes(val))
  );
  return ans;
}
console.log(isTrue(st, st2, st3));

//21) flat array

function flatFun(val) {
  let store = [];
  for (let i = 0; i < val.length; i++) {
    if (Array.isArray(val[i])) {
      let ans = flatFun(val[i]);
      // console.log(ans,"ooooooooo")
      for (let j = 0; j < ans.length; j++) {
        store.push(ans[j]);
      }
    } else {
      store.push(val[i]);
    }
  }
  return store;
}

const a = [1, [2, [3, [4]], 5]];
console.log(flatFun(a));

//22)flat in object

function flatObj(val) {
  const store = {};
  for (let i in val) {
    if (typeof val[i] === "object") {
      const res = flatObj(val[i]);
      for (let j in res) {
        store[i + "." + j] = res[j];
      }
    } else {
      store[i] = val[i];
    }
  }
  return store;
}

const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
};
console.log(flatObj(input));

// 23)dis and total find
const a = [
  { product: "book", price: 2000, discount: 10 },
  { product: "bag", price: 1500, discount: 20 },
  { product: "laptop", price: 30000, discount: 25 },
];

function totalFun(val) {
  const maxtotal = val.reduce((acc, val) => {
    const dis = (val.price * val.discount) / 100;
    // console.log(dis)
    const total = val.price - dis;
    //  console.log(total)
    console.log(
      `${val.product} and Price ${val.discount}% discount : ₹ ${total}`
    );
    return acc + total;
  }, 0);

  return `Total Price after all discounts: ₹ ${maxtotal}`;
}

console.log(totalFun(a));
