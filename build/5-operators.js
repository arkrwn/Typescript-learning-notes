// Other TypeScript Operators
// Assignment Operator (=)
var value = 10;
// Comparison Operators
var isEqual = value == 10; // true
var isNotEqual = value != 5; // true
var isGreater = value > 8; // true
var isLess = value < 20; // true
var isGreaterOrEqual = value >= 10; // true
var isLessOrEqual = value <= 15; // true
// Logical Operators
var isActive = true;
var hasPermission = false;
var result1 = isActive && hasPermission; // false 
var result2 = isActive || hasPermission; // true
var result3 = !isActive; // false 
// String Concatenation (+) 
var firstName = "Alice";
var lastName = "Smith";
var fullName = firstName + " " + lastName; // "Alice Smith"
// Typeof Operator
var message = "Hello";
var typeOfMessage = typeof message; // typeOfMessage will be "string"
// Conditional (Ternary) Operator (Shorthand for if-else)
var age = 25;
var isAdult = age >= 18 ? true : false; // isAdult will be true
// Example using strings
var greeting = age < 18
    ? "Welcome, young one"
    : "Greetings, adult";
