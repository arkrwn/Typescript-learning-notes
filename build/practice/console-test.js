"use strict";
// Handle user input in console using promptSync
// const promptSync = require('prompt-sync');
// const input = promptSync(); 
Object.defineProperty(exports, "__esModule", { value: true });
// let nameUser: string = input('Enter your name: ');
// let age: number = +input('Enter your age: '); 
// console.log("Hello, " + nameUser + "! You are " + age + " years old.");
// Read multiple file types
const fs = require("fs-extra");
const toml = require("toml");
const yaml = require("yaml");
let samplePath = "./practice/resources/sample-file/";
async function readFiles() {
    try {
        // Read TOML file
        const tomlContent = await fs.readFile(samplePath + 'sample.toml', 'utf-8');
        const tomlData = toml.parse(tomlContent);
        console.log('TOML Data:', tomlData);
        // Read YAML file
        const yamlContent = await fs.readFile(samplePath + 'sample.yaml', 'utf-8');
        const yamlData = yaml.parse(yamlContent);
        console.log('YAML Data:', yamlData);
        // Read JSON file
        const jsonData = await fs.readJSON(samplePath + 'sample.json');
        console.log('JSON Data:', jsonData);
    }
    catch (error) {
        console.error('Error reading files:', error);
    }
}
readFiles();
