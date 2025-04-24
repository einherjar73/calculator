const clear = document.querySelector("#clear");
const positNegat = document.querySelector("#positive-negative");
const backspace = document.querySelector("#backspace");
const dot = document.querySelector("#dot");
const equals = document.querySelector("#equals");
const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
let numberA;
let numberB;
let number;
let operator;
let numbers = [];
let result;
let operatorIsClicked = false;

for (let i = 0; i < 10; i++) {
  digits[i].addEventListener("click", (e) => {
    if (operatorIsClicked) {
      clearDisplay();
    }
    display.textContent += e.target.textContent;
    getNumber();
  });
}

for (let i = 0; i < 4; i++) {
  operators[i].addEventListener("click", (e) => {
    getNumber();
    operator = e.target.textContent;    
    numbers.push(number);    
    operatorIsClicked = true;    
  });
}

equals.addEventListener("click", () => {  
  numbers.push(number);
  display.textContent = operate(numbers[0], numbers[1], operator);  
  numbers = [];  
  operatorIsClicked = true;  
});

clear.addEventListener("click", clearAll);

// functions

function clearAll(){  
  clearDisplay();
  numbers = [];
  operatorIsClicked = false;
}

function clearDisplay() {
  display.textContent = "";
}

function addNums(a, b) {
  return a + b;
}

function subtractNums(a, b) {
  return a - b;
}

function multiplyNums(a, b) {
  return a * b;
}

function divideNums(a, b) {
  return a / b;
}

function operate(numberA, numberB, operator) {
  switch (operator) {
    case "+":
      return addNums(numberA, numberB);

    case "-":
      return subtractNums(numberA, numberB);

    case "*":
      return multiplyNums(numberA, numberB);

    case "/":
      return divideNums(numberA, numberB);

    default:
      return;
  }
}

function getNumber(){
  number = parseFloat(display.textContent);
  operatorIsClicked = false;  
}
