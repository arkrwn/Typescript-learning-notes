// Type annotations for the complete set of basic types

// Primitive Types
let isComplete: boolean = false; 
let stock: number = 10;
let greeting: string = "Welcome!";
let largeNumber: bigint = 900719925474099100n; 
let unique: symbol = Symbol("unique");

// Special Types 
let nothingHere: null = null;
let notAssigned: undefined;

// Structural Types
interface Product {
  name: string;
  price: number;
}

let product: Product = { name: "Tablet", price: 500 }; 

let colors: string[] = ["Red", "Green", "Blue"]; 
let scores: number[] = [85, 90, 78];

// Utility Types (some common examples)
let anythingGoes: unknown = 42; 
let neverReturns: never;  
let flexibleType: number | string; 

// Function with type annotations
function calculateArea(width: number, height: number): number {
  return width * height;
}
