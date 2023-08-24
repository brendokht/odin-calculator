let activeNumber = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let answer = null;

let addOp = "\u002B";
let subtractOp = "\u2212";
let multiplyOp = "\u00D7";
let divideOp = "\u00F7";
let moduloOp = "\u0025";
let sqrtOp = "\u221A";
let squareOp = "x2";
let inverseOp = "1/x";

const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll(".button.number");
const operators = document.querySelectorAll(".button.operator");
const equals = document.querySelector(".button.equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

numbers.forEach((button) => {
    button.addEventListener("click", (e) => {
        activeNumber += button.innerText;
        console.log(activeNumber);
        screen.innerText = activeNumber;
        if (firstNumber) {
            secondNumber = parseInt(activeNumber);
        }
    });
});

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (activeNumber === "" && !operator) {
            firstNumber = answer;
        } else if (activeNumber === "" && operator) {
        } else if (secondNumber) {
            firstNumber = operate(firstNumber, secondNumber, operator);
        } else {
            firstNumber = parseInt(activeNumber);
        }

        if (button.innerText === sqrtOp) {
            firstNumber = sqrt(firstNumber);
        } else if (button.innerText === squareOp) {
            firstNumber = square(firstNumber);
        } else if (button.innerText === inverseOp) {
            firstNumber = inverse(firstNumber);
        }

        screen.innerText = firstNumber.toString();
        activeNumber = "";
        operator = button.innerText;
        console.log(`${firstNumber} ${operator} ${secondNumber}`);
    });
});

equals.addEventListener("click", (e) => {
    secondNumber = parseInt(activeNumber);
    var ans = operate(firstNumber, secondNumber, operator);
    clearData();
    screen.innerText = ans;
    answer = ans;
});

clear.addEventListener("click", (e) => {
    clearData();
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        alert("Cannot divide by 0. Cleared data.");
        clearData();
        return 0;
    }
    return num1 / num2;
}

function inverse(num1) {
    return 1.0 / num1;
}

function square(num1) {
    return num1 * num1;
}

function sqrt(num1) {
    return Math.sqrt(num1);
}

function modulo(num1, num2) {
    return num1 % num2;
}

function clearData() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    activeNumber = "";
    screen.innerText = "0";
}

function operate(num1, num2, op) {
    var ans = 0;
    switch (op) {
        case addOp:
            ans = add(num1, num2);
            break;
        case subtractOp:
            ans = subtract(num1, num2);
            break;
        case multiplyOp:
            ans = multiply(num1, num2);
            break;
        case divideOp:
            ans = divide(num1, num2);
            break;
        case moduloOp:
            ans = modulo(num1, num2);
            break;
        default:
            throw new Error("Invalid operator");
    }
    return ans;
}
