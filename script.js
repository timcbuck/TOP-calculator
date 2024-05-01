let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operation = "";


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


function checkMaxNumberReached(val) {
    if (val.length > 9) {
        return "9999999999";
    } else {
        return val;
    }
}


function updateDisplay(num) {
    let displayNumber = getDisplayNumber();

    if (displayNumber.length > 9) {
        displayNumber = "9999999999"; // maximum display storage
        return;
    }

    // Remove leading zero if starting at 0
    if (displayNumber === "0") {
        displayNumber = "";
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
    /*
    1. Get the number in the display and store it in the global variable
    2. Set global operation variable to "add"
    3. Clear display
    */
   firstNumber = getDisplayNumber();
   operation = "add";
   clearDisplay();
}


function subtract() {
    /*
    1. Get the number in the display and store it in the global variable
    2. Set global operation variable to "subtract"
    3. Clear display
    */
   firstNumber = getDisplayNumber();
   operation = "subtract";
   clearDisplay();
}


function divide() {
    /*
    1. Get the number in the display and store it in the global variable
    2. Set global operation variable to "subtract"
    3. Clear display
    */
   firstNumber = getDisplayNumber();
   operation = "divide";
   clearDisplay();
}


function multiply() {
    /*
    1. Get the number in the display and store it in the global variable
    2. Set global operation variable to "subtract"
    3. Clear display
    */
   firstNumber = getDisplayNumber();
   operation = "multiply";
   clearDisplay();
}


function operate(firstNumber, secondNumber, operation) {
    let displayNumberDiv = document.querySelector('.display');
    if (operation === "add") {
        result = Number(firstNumber) + Number(secondNumber);
        displayNumberDiv.innerText = result;
        firstNumber = result;
    } else if (operation === "subtract") {
        result = Number(firstNumber) - Number(secondNumber);
        displayNumberDiv.innerText = result;
        firstNumber = result;
    } else if (operation === "multiply") {
        result = Number(firstNumber) * Number(secondNumber);
        displayNumberDiv.innerText = result;
        firstNumber = result;
    } else if (operation === "divide") {
        if (secondNumber === "0") {
            displayNumberDiv.innerText = "To infinity, and beyond!";
        } else {
            result = Number(firstNumber) / Number(secondNumber);
            displayNumberDiv.innerText = result;
            firstNumber = result;
        }
    }
}


function equals() {
    // Get the current display number (second number in the operation)
    secondNumber = getDisplayNumber();
    // Pass the global firstNumber, secondNumber and operation variables to the operate function
    operate(firstNumber, secondNumber, operation);
}


function clickNumber() {

}


buttonFillOnHover();