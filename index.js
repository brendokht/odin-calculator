let activeNumber = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let answer = null;

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
        if (activeNumber === "") {
            firstNumber = answer;
        } else if (secondNumber) {
            firstNumber = operate(firstNumber, secondNumber, operator);
        } else {
            firstNumber = parseInt(activeNumber);
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
        case "+":
            ans = add(num1, num2);
            break;
        case "-":
            ans = subtract(num1, num2);
            break;
        case "x":
            ans = multiply(num1, num2);
            break;
        case "/":
            ans = divide(num1, num2);
            break;
        default:
            throw new Error("Invalid operator");
    }
    return ans;
}
