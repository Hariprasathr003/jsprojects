

const display = document.getElementById("display");

function appendToDisply(input) {
  display.value += input;
}

function clearDisply() {
  display.value = "";
}
function backspace() {
  display.value = display.value.slice(0, -1);
}

function equalToCalculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}
