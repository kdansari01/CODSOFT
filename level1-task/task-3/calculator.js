let screen = document.getElementById("screen");

function appendToScreen(value) {
  if (screen.value === "0") {
    screen.value = value;
  } else {
    screen.value += value;
  }
}

function clearScreen() {
  screen.value = "0";
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}
