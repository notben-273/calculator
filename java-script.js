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

document.addEventListener('keydown', (e) => {

    console.log(e.key);

    if (ACCEPTEDKEYS.includes(e.key)) {

        displayValue = displayValue + e.key;
        display.textContent = displayValue;
    }
    else {

        switch (e.key) {
            case '.':
                decimalFunction();
                break;
        
            case 'Backspace':
                backspaceFunction();
                break;

            case 'Enter':
                equalsFunction();
                break;
            
            case 'Escape':
                clearFunction();
                break;

            case '+':
                addFunction();
                break;

            case '-':
                subtractFunction();
                break;

            case '*':
                multiplyFunction();
                break;

            case '/':
                divideFunction();
                break;
        }
    }
})

clearButton.addEventListener("click", clearFunction);
equalsButton.addEventListener("click", equalsFunction);
addButton.addEventListener('click', addFunction);
subtractButton.addEventListener('click', subtractFunction);
multiplyButton.addEventListener('click', multiplyFunction);
divideButton.addEventListener('click', divideFunction);
decimalButton.addEventListener('click', decimalFunction);
backspaceButton.addEventListener('click', backspaceFunction);

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
const ACCEPTEDKEYS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

function decimalFunction() {

    if (!(displayValue.includes('.'))) {
        
        if (displayValue == '') {

            displayValue = "0.";
        }
        else {

            displayValue = displayValue + '.';
        }

        display.textContent = displayValue;
    }
}

function backspaceFunction() {

    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.textContent = displayValue;

    if (displayValue == '') {

        display.textContent = '0';
    }
}

function clearFunction() {

    number1 = 0;
    operator = 'add';
    displayValue = '';
    display.textContent = '0';
}

function equalsFunction() {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'add';
}

function addFunction() {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'add';
}

function subtractFunction() {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'subtract';
}

function multiplyFunction() {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'multiply';
}

function divideFunction() {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1 * 1;
    displayValue = '';
    operator = 'divide';
}
