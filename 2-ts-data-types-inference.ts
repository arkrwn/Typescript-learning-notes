// Type inference with the complete set of basic types

// Primitive Types
let isActive = true;           // boolean
let count = 10;                // number 
let message = "Hello";         // string
let code = 900719925474099100n;// bigint
let uniqueId = Symbol("unique");// symbol

// Special Types
let emptyValue = null;         
let unassignedValue;            // Inferred as 'undefined'

// Structural Types
interface Person {
  name: string;
  age: number;
}
let person = { name: "Jane", age: 25 }; // Object

let numbers = [1, 2, 3];       // Array of numbers 
let names = ["Alice", "Bob"];  // Array of strings

// Utility Types (some common examples)
let someValue: unknown = "This could be anything"; 
let nothing: never; 
let someStringOrNumber: string | number;  // Union type

// Functions
function sum(x: number, y: number): number { 
   return x + y; 
} 
