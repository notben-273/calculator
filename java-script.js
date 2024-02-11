const keys = document.querySelectorAll(".key");
const display = document.querySelector("#display");
const clearButton = document.querySelector("#ac");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");

keys.forEach(element => {
    element.addEventListener("click", (e) => {

        displayValue = displayValue + element.id;
        display.textContent = displayValue;
    });
});

//User enters a number
//Number is displayed on screen

// Equals is entered
// number1 is operated with the current operator with the displayValue
// The answer becomes the new number1
// The answer is displayed on the screen
// The displayValue is reset

// Add is entered
// number1 and displayValue are operated with current operator
// the answer becomes the new number1
// the answer is displayed
// the operator is changed

clearButton.addEventListener("click", () => {
    
    number1 = 0;
    operator = 'add';
    displayValue = '';
    display.textContent = '0';
});

equalsButton.addEventListener("click", () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1;
    displayValue = '';
});

addButton.addEventListener('click', () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1;
    displayValue = '';
    operator = 'add';
});

subtractButton.addEventListener('click', () => {

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1;
    displayValue = '';
    operator = 'subtract';
});

multiplyButton.addEventListener('click', () => {

    if (displayValue == '') {
        displayValue = '1';
    }

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1;
    displayValue = '';
    operator = 'multiply';
});

divideButton.addEventListener('click', () => {

    if (displayValue == '') {
        displayValue = '1';
    }

    number1 = operate(number1, displayValue, operator);
    display.textContent = number1;
    displayValue = '';
    operator = 'divide';
});

function add(number1, number2) {
    return +number1 + +number2;
}

function subtract(number1, number2) {
    return +number1 - +number2;
}

function multiply(number1, number2) {
    return +number1 * +number2;
}

function divide(number1, number2) {

    if (number1 % number2 == 0){
        return +number1 / +number2;
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
            return multiply(number1, number2);

        case "divide":
            if (number2 == '0') {
                return 'Nice Try';
            }

            return divide(number1, number2);
    }
}