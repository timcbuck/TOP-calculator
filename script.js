let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operation = "";
let isOperationClicked = false;


function checkMaxNumberReached(result) {
    if (result > 9999999999) {
        return "9999999999";
    } else {
        return result;
    }
}


function updateDisplay(num) {
    let displayNumber = getDisplayNumber();

    // Clear display number if operation clicked or only 0 displayed
    if (displayNumber === "0" || isOperationClicked == true) {
        displayNumber = "";
        isOperationClicked = false;
    }

    // Check if number is greater than maximum display, if it is, prevent user from appending more numbers
    if (displayNumber.length > 9) {
        displayNumber = "9999999999"; // maximum display storage
        return;
    }

    // Append the new number to the end of the current number
    displayNumber = displayNumber + num;
    // Update the display number div text with the new number
    let displayNumberDiv = document.querySelector('.display');
    displayNumberDiv.innerText = displayNumber;
}


function clearDisplay() {
    let displayNumberDiv = document.querySelector('.display');
    displayNumberDiv.innerText = "0";
}


function getDisplayNumber() {
    return document.querySelector('.display').innerText;
}


function add() {
   firstNumber = getDisplayNumber();
   operation = "add";
   isOperationClicked = true;
}


function subtract() {
   firstNumber = getDisplayNumber();
   operation = "subtract";
   isOperationClicked = true;
}


function divide() {
   firstNumber = getDisplayNumber();
   operation = "divide";
   isOperationClicked = true;
}


function multiply() {
   firstNumber = getDisplayNumber();
   operation = "multiply";
   isOperationClicked = true;
}


function operate(firstNumber, secondNumber, operation) {
    let displayNumberDiv = document.querySelector('.display');
    if (operation === "add") {
        result = Number(firstNumber) + Number(secondNumber);
        result = checkDecimals(result);
        result = checkMaxNumberReached(result);
        displayNumberDiv.innerText = result;
        firstNumber = result;
    } else if (operation === "subtract") {
        result = Number(firstNumber) - Number(secondNumber);
        result = checkDecimals(result);
        result = checkMaxNumberReached(result);
        displayNumberDiv.innerText = result;
        firstNumber = result;
    } else if (operation === "multiply") {
        result = Number(firstNumber) * Number(secondNumber);
        result = checkDecimals(result);
        result = checkMaxNumberReached(result);
        displayNumberDiv.innerText = result;
        firstNumber = result;
    } else if (operation === "divide") {
        if (secondNumber === "0") {
            displayNumberDiv.innerText = "To infinity, and beyond!";
        } else {
            result = Number(firstNumber) / Number(secondNumber);
            // Check if number is a decimal that has too many places
            result = checkDecimals(result);
            result = checkMaxNumberReached(result);
            displayNumberDiv.innerText = result;
            firstNumber = result;
        }
    }
    console.log(result);
}


function checkDecimals(result) {
    let resultLength = result.toString().length;
    if (resultLength > 9) {
        shorterResult = Number(result.toString().slice(0, 11));
        return shorterResult;
    } else {
        return result;
    }
}


function equals() {
    // Get the current display number (second number in the operation)
    secondNumber = getDisplayNumber();
    // Pass the global firstNumber, secondNumber and operation variables to the operate function
    operate(firstNumber, secondNumber, operation);
    // Reset the select operation
    operation = "";
    isOperationClicked = true;
}


function buttonFillOnHover() {
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", (event) => {
            //event.target.style.backgroundColor = fillColor;
            event.target.classList.add("button-fill");
        });
        button.addEventListener("mouseout", (event) => {
            //event.target.style.backgroundColor = fillColor;
            event.target.classList.remove("button-fill");
        });
    });
}


buttonFillOnHover();