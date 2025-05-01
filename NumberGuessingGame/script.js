const numberinput = document.getElementById("numberinput");
const button = document.getElementById("button");
const attempts = document.getElementById("attempts");
const reset = document.getElementById("reset1");
const win = document.getElementById("win");

const randomNumber = Math.floor(Math.random() * 100);
let attempt = 0;

button.addEventListener("click", () => {
  const guess = Number(numberinput.value);
  attempt++;
  if (guess === randomNumber) {
    win.textContent = "win";
  } else {
    win.textContent = "wrong";
  }
  attempts.textContent = `Attempts : ${attempt}`;
});

reset.addEventListener("click", () => {
  numberinput.value = "";
  win.textContent = "";
  attempts.textContent = "";
  attempt = 0;
});
