// Other TypeScript Operators

// Assignment Operator (=)
let value: number = 10; 

// Comparison Operators
let isEqual: boolean = value == 10;      // true
let isNotEqual: boolean = value != 5;    // true
let isGreater: boolean = value > 8;      // true
let isLess: boolean = value < 20;        // true
let isGreaterOrEqual: boolean = value >= 10;  // true
let isLessOrEqual: boolean = value <= 15;    // true

// Logical Operators
let isActive: boolean = true;
let hasPermission: boolean = false;

let result1: boolean = isActive && hasPermission; // false 
let result2: boolean = isActive || hasPermission; // true
let result3: boolean = !isActive;                 // false 

// String Concatenation (+) 
let firstName: string = "Alice";
let lastName: string = "Smith";
let fullName: string = firstName + " " + lastName;  // "Alice Smith"

// Typeof Operator
let message: string = "Hello";
let typeOfMessage: string = typeof message;      // typeOfMessage will be "string"

// Conditional (Ternary) Operator (Shorthand for if-else)

let age: number = 25;
let isAdult: boolean = age >= 18 ? true : false;  // isAdult will be true

// Example using strings
let greeting: string = age < 18 
    ? "Welcome, young one" 
    : "Greetings, adult";
