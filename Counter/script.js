const decre = document.getElementById("decre");
const incre = document.getElementById("incre");
const reset = document.getElementById("reset");
const demo = document.getElementById("demo");
const demo2 = document.getElementById("demo2");

let count = 0;
incre.addEventListener("click", increment);
function increment() {
  demo2.textContent = count++;
}

decre.addEventListener("click", decrement);
function decrement() {
  demo2.textContent = count--;
}

reset.addEventListener("click", resetcount);
function resetcount() {
  count = 0;
  demo2.textContent = count;
}
