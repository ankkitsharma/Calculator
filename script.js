//arithmetic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1*num2;
const divide = (num1, num2) => num1/num2;

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
// display();
//clear display function
function clearDisplay() {
    displayValue = "";
}

//button click
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.className.includes("oprd")) {
            
            inputOprd(button.textContent);
            display();
        }
        else if(button.className.includes("oprt")) {
            inputOprt(button.textContent.toString());
            display();
        }
        else if(button.className.includes("equal")) {
            Equal();
            display();     
        }
        else if(button.className.includes("ac")) {
            AC();
            display();    
        }
        else if(button.className.includes("cl")) {
            CL();
            display();     
        }
        else if(button.className.includes("dot")) {
            inputDot();
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
    // displayValue = "";
    // displayValue += operand;
}

function inputOprt(operator) {
    if(opr === null) {
        opr = operator;
        displayValue = num1 + opr;
    }
    else {
        num1 = operate(Number(num1), Number(num2), opr);
        num2 = "";
        opr = operator;
        displayValue = num1 + opr;
    }
}

