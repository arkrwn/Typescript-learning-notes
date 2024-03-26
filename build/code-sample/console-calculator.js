"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline"); // For input collection
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function calculator() {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter operator (+, -, *, /): ', (operator) => {
            rl.question('Enter second number: ', (num2) => {
                const result = calculate(+num1, +num2, operator);
                console.log("Result:", result);
                rl.close();
            });
        });
    });
}
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: throw new Error('Invalid operator');
    }
}
calculator();
