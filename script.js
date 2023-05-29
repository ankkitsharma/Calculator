//arithmetic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

//operation variables
let num1 = "";
let num2 = "";
let opr = null;

//operation function
const operate = (num1, num2, opr) => {
    switch (opr) {
        case "+":
            return add(num1, num2);
            break;

        case "-":
            return subtract(num1, num2);
            break;

        case "*":
            return product(num1, num2);
            break;

        case "/":
            return divide(num1, num2);
            break;
    }
}

//dom elements
const buttons = document.querySelectorAll(".gStyle");


//display variables
let displayValue = "";

//display function
const disp = document.querySelector(".screenText");

function display() {
    disp.textContent = displayValue;

}

//button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.className.includes("oprd")) {

            inputOprd(button.textContent);
            display();
        }
        else if (button.className.includes("oprt")) {
            inputOprt(button.textContent.toString());
            display();
        }
        else if (button.className.includes("equal")) {
            Equal();
            display();
        }
        else if (button.className.includes("ac")) {
            AC();
            display();
        }
        else if (button.className.includes("cl")) {
            CL();
            display();
        }
        else if (button.className.includes("dot")) {
            inputOprd(button.textContent);
            display();
        }
    });
});

function inputOprd(operand) {
    if(opr === null) {
        num1 += operand;
        displayValue = num1;
    }
    else {
        num2 += operand;
        displayValue = num1 + opr + num2;
    }
}

function inputOprt(operator) {
    if (num1 === "") {
        num1 += operator;
        displayValue = num1;
    }
    else if (opr === null) {
        opr = operator;
        displayValue = num1 + opr;
    }
    else if (opr !== null && num2 === "") {
        num2 += operator;
        displayValue = num1 + opr + num2;
    }
    else if (opr !== null && num2 === "0") {
        displayValue = num1 + opr + num2;
        alert("Can't divide by zero!");
    }
    else if (opr !== null && num2 !== "") {
        num1 = Math.round(operate(Number(num1), Number(num2), opr) * 10000) / 10000;
        num2 = "";
        opr = operator;
        displayValue = num1 + opr;
    }
}

function Equal() {
    if (num2 === "0") {
        displayValue = num1 + opr + num2;
        alert("Can't divide by zero!");
    }
    else if (opr !== null) {
        num1 = Math.round(operate(Number(num1), Number(num2), opr) * 10000) / 10000;
        num2 = "";
        opr = null;
        displayValue = num1;
    }
}

function AC() {
    num1 = "";
    num2 = "";
    opr = null;
    displayValue = "";
}

function CL() {
    if (num2 !== "") {
        num2 = "";
        displayValue = num1 + opr;
    }
    else if (opr !== null && num2 === "") {
        opr = null;
        displayValue = num1;
    }
    else {
        num1 = "";
        displayValue = "";
    }
}

