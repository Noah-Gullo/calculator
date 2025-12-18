let firstNum = "";
let operation = "";
let secondNum = "";

let record = "";

const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equalsButton");
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
    if(num1 === "" || num2 == ""){
        clearDisplay();
        return;
    }


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

    if(result % 10 !== 0){
        result.toFixed(2);
    }

    updateDisplay(result);
    record = result;
    firstNum = record;
    operation = "";
    secondNum = "";


    console.log("Operator() finished.");
    printStatus();
    return result;
}

function inputNumber(input){
    if(record === "0"){
        record = input;
    }else if(operation === ""){
        firstNum += input;
        record += input;
    }else{
        secondNum += input;
        record += input;
    }
    
    
    updateDisplay(record);
    console.log("Number " + input +" inputted.");
    printStatus();
}

function inputOperator(input){
    if(operation === ""){
        operation = input;
        record += operation;
    }else{
        record = operate(operation, firstNum, secondNum);
        firstNum = record;
        operation = input;
        secondNum = "";
        record = firstNum + operation;
    }

    updateDisplay(record);

    console.log("Operator " + input + " inputted.");
    printStatus();
}

function printStatus(){
    console.log(`Record: ${record}, First Num: ${firstNum}, Operator: ${operation}, Second Num: ${secondNum}.`);
}

function updateDisplay(input){
    display.textContent = input;
}

function clearDisplay(){
    record = "0";
    firstNum = "";
    operation = "";
    secondNum = ""

    display.textContent = record;
    console.log("clearDisplay() called. Record now " + record);
    printStatus()
}

function setButtonColor(button, color){
    button.style.backgroundColor = color;
}

function setButtonTextSize(button, size){
    button.style.fontSize = size;
}

clearButton.addEventListener("click", () => clearDisplay());
equalsButton.addEventListener("click", () => operate(operation, firstNum, secondNum));

for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", () => inputNumber(numButtons[i].textContent));
}

for(let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", () => inputOperator(operatorButtons[i].textContent));
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mouseenter", () => {
        setButtonTextSize(buttons[i], "30px");
        setButtonColor(buttons[i], "#acb9e3ff")
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