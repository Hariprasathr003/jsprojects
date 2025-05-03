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
