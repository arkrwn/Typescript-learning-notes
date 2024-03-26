"use strict";
// Handle user input in console using promptSync
// const promptSync = require('prompt-sync');
// const input = promptSync(); 
Object.defineProperty(exports, "__esModule", { value: true });
// let nameUser: string = input('Enter your name: ');
// let age: number = +input('Enter your age: '); 
// console.log("Hello, " + nameUser + "! You are " + age + " years old.");
// Handle user input in console using node js module
const readline = require("node:readline/promises");
const node_process_1 = require("node:process");
const rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
const answer = await rl.question('What is your favorite color? ');
console.log(`Your favorite color is ${answer}`);
rl.close();
