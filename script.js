let firstNum = 0;
let operation = "";
let secondNum = 0;

let userInput = "";

const buttons = document.querySelectorAll("button");
const numButtons = document.querySelectorAll(".number");
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
    let result = 0;
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

function setDisplay(input){
    if(userInput === "0"){
        userInput = input;
    }else{
        userInput += input;
    }

    display.textContent = userInput;
}

function clearDisplay(){
    userInput = "0";
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
    numButtons[i].addEventListener("click", () => setDisplay(numButtons[i].textContent));
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