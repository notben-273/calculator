const keys = document.querySelectorAll(".key");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#ac");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const backspaceButton = document.querySelector("#backspace");

keys.forEach(element => {
    element.addEventListener("click", (e) => {

        displayValue = displayValue + element.id;
        display.textContent = displayValue;
    });
});

clearButton.addEventListener("click", () => {
    
    number1 = 0;
    operator = 'add';
    displayValue = '';
    display.textContent = '0';
});

equalsButton.addEventListener("click", () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'add';
});

addButton.addEventListener('click', () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'add';
});

subtractButton.addEventListener('click', () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'subtract';
});

multiplyButton.addEventListener('click', () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'multiply';
});

divideButton.addEventListener('click', () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'divide';
});

decimalButton.addEventListener('click', () => {

    if (!(displayValue.includes('.'))) {
        
        if (displayValue == '') {

            displayValue = "0.";
        }
        else {

            displayValue = displayValue + '.';
        }

        display.textContent = displayValue;
    }
});

backspaceButton.addEventListener('click', () => {

    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.textContent = displayValue;

    if (displayValue == '') {

        display.textContent = '0';
    }
});

function add(number1, number2) {
    return (+number1 + +number2);
}

function subtract(number1, number2) {
    return (+number1 - +number2);
}

function multiply(number1, number2) {
    return (+number1 * +number2);
}

function divide(number1, number2) {

    if (number1 % number2 == 0){
        return (+number1 / +number2);
    }

    return (+number1 / +number2).toFixed(7);
}

let number1 = 0;
let operator = 'add';
let displayValue = '';

function operate(number1, number2, operator) {

    switch (operator) {
        case "add":
            return add(number1, number2);

        case "subtract":
            return subtract(number1, number2);

        case "multiply":
            if (displayValue == '') {
                displayValue = '1';
            }
            return multiply(number1, number2);

        case "divide":
            if (number2 == '0') {
                return 'Nice Try';
            }
            else if (displayValue == '') {
                displayValue = '1';
            }

            return divide(number1, number2);
    }
}