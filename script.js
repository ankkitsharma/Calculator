//arithmetic functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1*num2;
const divide = (num1, num2) => num1/num2;

//operation variables
let num1;
let num2;
let opr; //operator

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
