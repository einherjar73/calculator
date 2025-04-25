const clear = document.querySelector("#clear");
const positNegat = document.querySelector("#positive-negative");
const backspace = document.querySelector("#backspace");
const equals = document.querySelector("#equals");
const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
let number;
let operator;
let numbers = [];
let result;
let operatorIsClicked = false;
let operatorClickedOnce = true;
let equalIsClickedOnce = true;
let dividedByZero = false;

for (let i = 0; i < 11; i++) {
  digits[i].addEventListener("click", (e) => {
    if (display.textContent.includes(".") && 
    e.target.id === "dot"){
      return;
    } else {
      if (operatorIsClicked) {
        clearDisplay();
      }
      if (display.textContent.length < 10){
        display.textContent += e.target.textContent;
        getNumber();
      }
    }
  });
}


for (let i = 0; i < 4; i++) {
  operators[i].addEventListener("click", (e) => {
    if (operatorClickedOnce){
      if (display.textContent != ''){
        getNumber();
        numbers.push(number);        
        operator = e.target.textContent;        
        operatorIsClicked = true;
        operatorClickedOnce = false;
        equalIsClickedOnce = true;               
      }
    } else if (!operatorClickedOnce){
      operatorEqualsTo(operator);
      getNumber();
      operator = e.target.textContent;
      operatorIsClicked = true;
      operatorClickedOnce = false;
      equalIsClickedOnce = true;      
    }
  });
}

equals.addEventListener("click", equalsTo);

clear.addEventListener("click", clearAll);

// functions

function equalsTo(){
  if (equalIsClickedOnce){
    if (operator){
      numbers.push(number);
      display.textContent = operate(numbers[numbers.length-2], numbers[numbers.length-1], operator);
      numbers = [];
      operatorIsClicked = true;
      operatorClickedOnce = true;
      equalIsClickedOnce = false;      
    }
  }
}

function operatorEqualsTo(operator){
  numbers.push(number);
  display.textContent = operate(numbers[numbers.length-2], numbers[numbers.length-1], operator);
  numbers.push(parseFloat(display.textContent));
  operatorIsClicked = true;  
}

function clearAll(){
  clearDisplay();
  numbers = [];
  operator = '';
  operatorIsClicked = false;
  operatorClickedOnce = true;
  equalIsClickedOnce = true;
  dividedByZero = false;
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
  
  if (b === 0){    
    return "I Can't 😔";
  } else {
    return a / b;
  }
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
