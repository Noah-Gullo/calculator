let firstNum = 0;
let operation = "";
let secondNum = 0;

let userInput = "";

const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clearButton");
const display = document.querySelector(".display");

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, num1, num2){
    userInput = "";
    let result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }

    return result;
}

function inputNumber(input){
    if(userInput === "0"){
        userInput = input;
    }else if(operation === ""){
        firstNum += input;
    }else{
        secondNum += input;
    }
    
    userInput += input;
    updateDisplay();
    console.log(input +" INPUTTED. USER INPUT NOW " + userInput);
}

function inputOperator(input){
    if(operation === ""){
        operation = input;
        userInput += operation;
    }else{
        userInput = operate(operation, firstNum, secondNum);
        firstNum = userInput;
        operation = input;
        secondNum = "";
    }

    
    userInput = firstNum + operation;
    updateDisplay();
    console.log(input + " inputted. user input now " + userInput);
}

function updateDisplay(){
    display.textContent = userInput;
}

function clearDisplay(){
    userInput = "0";
    firstNum = "";
    operation = "";
    secondNum = ""

    display.textContent = userInput;
}

function setButtonColor(button, color){
    button.style.backgroundColor = color;
}

function setButtonTextSize(button, size){
    button.style.fontSize = size;
}

clearButton.addEventListener("click", () => clearDisplay());

for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", () => inputNumber(numButtons[i].textContent));
}

for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", () => inputOperator(operatorButtons[i].textContent));
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mouseenter", () => {
        setButtonTextSize(buttons[i], "30px");
        setButtonColor(buttons[i], "#adbae6ff")
    });
    buttons[i].addEventListener("mouseleave", () => {
        setButtonTextSize(buttons[i], "24px");
        setButtonColor(buttons[i], "#96e5ffff")
    });
    buttons[i].addEventListener("mousedown", () => {
        setButtonTextSize(buttons[i], "36px");
        setButtonColor(buttons[i], "#7c8ab8ff")
    });
    buttons[i].addEventListener("mouseup", () => {
        setButtonTextSize(buttons[i], "24px");
        setButtonColor(buttons[i], "#96e5ffff")
    });
}