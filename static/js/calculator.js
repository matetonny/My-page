// script.js
let displayValue = "";

function updateDisplay() {
  document.getElementById("display").innerText = displayValue || "0";
}

function appendDigit(digit) {
  displayValue += digit;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === "" && operator !== "-") return;
  const lastChar = displayValue[displayValue.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    displayValue = displayValue.slice(0, -1);
  }
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = "Error";
  }
  updateDisplay();
}
