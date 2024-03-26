// Handle user input in console using promptSync
// const promptSync = require('prompt-sync');
// const input = promptSync(); 

// let nameUser: string = input('Enter your name: ');
// let age: number = +input('Enter your age: '); 

// console.log("Hello, " + nameUser + "! You are " + age + " years old.");


// Handle user input in console using node js module
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What is your favorite color? ');
console.log(`Your favorite color is ${answer}`);

rl.close(); 
