const keys = document.querySelectorAll(".key");
const display = document.querySelector("#display");

keys.forEach(element => {
    element.addEventListener("click", (e) => {
        //display.textContent = element.id;
        displayValue = displayValue + element.id;
        display.textContent = displayValue;
    })
});

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

let number1;
let number2;
let operator;
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
            return divide(number1, number2);
    }
}

console.log(operate(33, 77, "add"));
console.log(operate(33, 77, "subtract"));
console.log(operate(33, 77, "multiply"));
console.log(operate(33, 77, "divide"));