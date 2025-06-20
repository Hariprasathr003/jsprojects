//String

//length //
// des : value of full length
// return : to number
//example
//const a="java"
//console.log(a.length)

//charAt() //
//  des : value of single character particular index value
// return : string
//example
// const a="java"
// console.log(a.charAt(1))

//at() //
//  des : index of value support negative index
// return : string
//example
// const a="java"
// console.log(a.at(2))

//string manipulation//

//toUpperCase() //
// des : value modify to  uppercase value
// return : string
//example
// const a="java"
// console.log(a.toUpperCase())

//toLowerCase() //
// des :value modify to lowercase value
// return : string
//example
// const a="java"
// console.log(a.toLowerCase())

//trim() //
// des : remove to the whitespace
// return : string
//example
// const a="   java   "
// console.log(a.trim(""))

//trimStart() //
// des :remove to the start whitespace
// return:string
//example
// const a="   java   "
// console.log(a.trimStart(""))

//trimEnd() //
// des:remove to the end  whitespace
// return:string
//example
// const a="   java   "
// console.log(a.trimEnd(""))

//slice(start,end)//
// des:extract to the particular length of value (end -1) and accept negative value and first value only input it start to end all value showed
// return:string
//example
// const a="javascript"
// console.log(a.slice(4))

//substring(start,end)//
// des :similar to slice method extract to the particular value but not accept negative value
// return:string
//example
// const a="javascript"
// console.log(a.substring(4))

//substr(start,end)//
// des:similar to the slice method and accept to negative value
//return :string
//example
// const a="javascript"
// console.log(a.substr(4))

//search method //

//indexOf("val")//
// des:serach to the particular index value
//return:number  and number not found return -1
//example
// const a="javascript"
// console.log(a.indexOf("scr"))

//lastIndexOf()//
// des :search and last index of particular value same value only find
//return :number
//example
// const a="javascript javascirpt"
// console.log(a.lastIndexOf("t"))

//includes()//
// des:search to the particular value
// return:Boolean
//example
// const a="javascript "
// console.log(a.includes("va"))

//startsWith()//
// des:search to the start particular value
//return:Boolean
//example
// const a="javascript "
// console.log(a.startsWith("j"))

//endsWith()//
// des:seacrch to the end particular value
//return :Boolean
//example
// const a="javascript"
// console.log(a.endsWith("t"))

//replace(old,new) //
// des : replace with paricular value  first match only
// return:string
//example
// const a="javascript"
// console.log(a.replace("java","type"))

//replaceAll(old,new)//
// des:replace with paricular value all matches
// return : string
//example
// const a="javascriptjava"
// console.log(a.replaceAll("java","type"))

//split(split value in)//
// des:split in particular experission(" ,")
//  return: array
//example
// const a="java script java"
// console.log(a.split(" "))

//concat(val) //
// des :concat to another string
//return : string
//example
// const a="java"
// console.log(a.concat("script"))

//repeat(n)//
// des:repeat to the value (n) times
//return:string
//example
// const a="java"
// console.log(a.repeat(2))

//match(/s/i/g)//
// des:match to the regular expression use to match find first match only
//return:Array or null
//example
// const a="java script123"
// console.log(a.match(/\D/))
//regEs

// common regex
//g (global match) , i (case-insensitive) ,m (multiline match) ,s (dot matches newline) ,u  (unicode)
// /d (digit 0-9 ), /D (non - digit (/\d/)) ,/w (word character (/\w/) a-z,A-Z,0-9),/W (non word charater (@,!,#)) ,/s (whitespace) ,/S (non whitespace (/\s/)) ,^ (start of string (/^hi/)) ,$ (end of string (/hi$/))

//matchAll(/d/s/gi)//
// des:match all matches regular experssion
// return:Iterator
//example
// const a="java script123"
// console.log(a.match(/\D+/g))

//padStart(length,value)//
// des:pading to the start in particular values to fill
//return:string
//example
// const a="java"
// console.log(a.padStart(10,"0"))

//padEnd(length,value)//
// des:pading to end the particular values to fill
//return:string
//example
// const a="java"
// console.log(a.padEnd(10,"0"))

//tostring()//
// des:modify to the number to string
// return:string
//example
// const a=12345
// console.log(a.toString())

//valueof()//
// des: Returns the primitive value of the string
//return:string

let text = "W3Schools";
let text1 = "Apple, Banana, Kiwi";

let textsearch = "Please locate where 'locate' occurs!";
let textsearch2 = "The rain in SPAIN stays mainly in the plain";

let index = textsearch.indexOf("locate");
let index1 = textsearch.lastIndexOf("locate");
let index2 = textsearch.indexOf("locate", 15);
let index3 = textsearch.search("locate");
let index4 = textsearch2.match("ain");
let index5 = textsearch2.matchAll("ain");
let index6 = textsearch2.includes("rain");

let character = text.at(0);
let letter = text.charAt(0);
let length = text.length;

let name = "Hello";
let name2 = "World";
let text4 = name.concat(name2);

let white = "      Hello World!      ";
let text5 = white.trim();
let text6 = white.trimStart();
let text7 = white.trimEnd();
let number = "5";
let padded = number.padStart(4, "0");
let padded1 = number.padEnd(4, "0");

let part = text1.slice(7, 13);
let part1 = text.slice(-12);
let part2 = text.substring(7, 13);
let part3 = text.substr(7, 6);
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();
let text8 = text.repeat(2);
let text9 = text.replace("W3Schools", "Microsoft");
let text10 = text1.split(",");

console.log(character, "at method");
console.log(letter, "charAt method");
console.log(length, "length method");
console.log(part, "slice method");
console.log(part1, "slice method riverse");
console.log(part2, "substring method ");
console.log(
  part3,
  "substr method first parameter pass index value and second parameter length of the string "
);
console.log(text2, "UpperCase method ");
console.log(text3, "LowerCase method ");
console.log(text4, "concat method ");
console.log(text5, "trim method remove white space");
console.log(text6, "trimStart method remove white space start");
console.log(text7, "trimEnd method remove white space end");
console.log(padded, "padStart method add string value in starting");
console.log(padded1, "padEnd method add string value in End");
console.log(text8, "repeat method repeat string value");
console.log(text9, "replace method replace string value");
console.log(text10, "split method split string value");
console.log("string search methods");
console.log(index, "indexOf searchmethod position to the string value");
console.log(
  index1,
  "lastIndexOf searchmethod last position to the string value"
);
console.log(
  index1,
  "indexOf searchmethod  position to the string value and secant parameter was starting ofthe index value"
);
console.log(index3, "search method position to the string value");
console.log(
  "The search() method cannot take a second start position argument and The indexOf method cannot take powerful search values regular expressions (/)"
);

console.log(
  index4,
  "match searchmethod position matching a string against a string"
);

console.log(
  index5,
  "matchAll searchmethod position matching a string to end against a string"
);
console.log(
  index6,
  "includes searchmethod find the value in current string find value is true not find false throw the message "
);

console.log(
  "startsWith , endsWith same in includes method find and return boolean value"
);

// Find the length of a string TASK - 1

const a = "Hariprasath";
console.log(a.length, " Find the length of a string");

// Get the first and last character of a string

const b = a.at(0) + a.at(a.length - 1);
console.log(b, "Get the first and last character of a string");

// Convert a string to uppercase and lowercase

const c = a.toUpperCase();
console.log(c, " Convert a string to uppercase and lowercase");

// Trim leading and trailing spaces

const d = "    hariprasath     ";
console.log(d.trim(), " Trim leading and trailing spaces");

// Concatenate two strings
const e = "hari";
const f = "prasath";
console.log(e.concat(f), "Concatenate two strings");

// Check if a string includes a substring

const g = a.includes("Hari");
console.log(g, "Check if a string includes a substring");

// Find the index of a character

const h = a.indexOf("t");
console.log(h);

// Capitalize the first letter of a string

const i = "java";
const j = i.charAt(0).toUpperCase() + i.slice(1);
console.log(j, "Capitalize the first letter of a string");

//  Reverse a string

function rev() {
  const k = "java";
  let l = "";
  for (let i = k.length - 1; i >= 0; i--) {
    l += k[i];
  }
  return l;
}
console.log(rev(), " Reverse a string");

const m = "javascript";
const n = m.split("").reverse().join("");
console.log(n, " Reverse a string");

// Count the number of vowels in a string

function vowefun(val) {
  const vow = "aeiou";
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (vow.includes(val[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowefun("javascript"), "Count the number of vowels in a string");

const count = m.match(/[aeiou]/gi) || [];
console.log(count.length, "Count the number of vowels in a string");

// Mask all characters except the last 4

const num = "12345678";
const val = num.slice(-4).padStart(num.length, "*");
console.log(val, "Mask all characters except the last 4");

// Replace all spaces with dashes

const rep = "   java script program  ";
const repla = rep.trim().replace(/\s/g, "-");
console.log(repla);

// Check if a string is a palindrome

function polyfunc(val) {
  const a2 = val.split("").reverse().join("");
  if (val === a2) {
    return "poly";
  } else {
    return "not poly";
  }
}
const a1 = "mam";
console.log(polyfunc(a1));

// Get words from a sentence

const word = "i am beginner";
console.log(word.split(" "));

// Count frequency of each character

function countFun(val) {
  let count = {};
  for (let i of val) {
    count[i] = (count[i] || 0) + 1;
  }
  return count;
}
console.log(countFun("javascript"));

// Extract domain name from an email

const email = "abc@gamil.com";
console.log(email.split("@")[1]);

// Find duplicate words in a sentence

function dupli(val) {
  const spl = val.split(" ");
  const store = {};
  const dupli = [];

  for (let val of spl) {
    if (store[val]) {
      if (!dupli.includes(val)) {
        dupli.push(val);
      }
    } else {
      store[val] = true;
    }
  }

  return dupli;
}

const sen = "this is a pen and this is a pencil";
console.log(dupli(sen));

// Remove all special characters from a string

function splFunction(val) {
  return val.replace(/[^a-zA-Z0-9]/g, "");
}
console.log(splFunction("hariprasath@gamil.com"));

// Convert a sentence to Title Case

const tit = "i am a beginner";
function firsetFunc(val) {
  const spl = val.split(" ");
  const ans = spl.map((res) => res.charAt(0).toUpperCase() + res.slice(1));
  return ans.join(" ");
}
console.log(firsetFunc(tit));
