//arithmetic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1*num2;
const divide = (num1, num2) => num1/num2;

//operation variables
let num1;
let num2;
let opr; //operator

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
const buttons = document.querySelector(".buttons");

//create grid
let divs = [];
for(let i = 0; i < 20; i++) {
    divs[i] = document.createElement("div");
    buttons.appendChild(divs[i]);
    divs[i].style.cssText = `width: calc((${100}%/${4}) - 10px); height: calc((${100}%/${5}) - 10px);`;
    divs[i].classList.toggle("gStyle");
}

