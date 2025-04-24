const clear = document.querySelector("#clear");
const positNegat = document.querySelector("#positive-negative");
const percent = document.querySelector("#percent");
const add = document.querySelector("#add");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const subtract = document.querySelector("#subtract");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const multiply = document.querySelector("#multiply");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const divide = document.querySelector("#divide");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equals = document.querySelector("#equals");
const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
let number;
let operator;
let dispNums = [];
let newArr = [];
let result;
let operatorIsClicked = false;

for (let i = 0; i < 10; i++) {
  digits[i].addEventListener("click", (e) => {
    if (operatorIsClicked) {
      display.textContent = "";
      dispNums = [];
    }
    if (dispNums.length != 10) {
      dispNums.push(e.target.textContent);
    }

    display.textContent = dispNums.join("");
    number = parseFloat(display.textContent);
    newArr.push(number);
    operatorIsClicked = false;
  });
}

for (let i = 0; i < 4; i++) {
  operators[i].addEventListener("click", (e) => {
    operator = e.target.textContent;
    operatorIsClicked = true;
  });
}

equals.addEventListener("click", () => {
  operate;
});

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

clear.addEventListener("click", () => {
  dispNums = [];
  newArr = [];
  display.textContent = dispNums;
  operatorIsClicked = false;
});

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
