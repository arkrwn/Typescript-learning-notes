// Type inference with the complete set of basic types
// Primitive Types
var isActive = true; // boolean
var count = 10; // number 
var message = "Hello"; // string
var code = 900719925474099100n; // bigint
var uniqueId = Symbol("unique"); // symbol
// Special Types
var emptyValue = null;
var unassignedValue; // Inferred as 'undefined'
var person = { name: "Jane", age: 25 }; // Object
var numbers = [1, 2, 3]; // Array of numbers 
var names = ["Alice", "Bob"]; // Array of strings
// Utility Types (some common examples)
var someValue = "This could be anything";
var nothing;
var someStringOrNumber; // Union type
// Functions
function sum(x, y) {
    return x + y;
}
