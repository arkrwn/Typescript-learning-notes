// Function Overloads: Define multiple signatures for the same function, allowing it to handle different argument combinations.
function formatValue(value: number): string; 
function formatValue(value: Date): string; 
function formatValue(value: number | Date): string { // Implementation
     // ...logic to format based on the input type
}

// Callback Functions with Specific Signatures
interface SortCallback<T> {
    (a: T, b: T): number; // -1, 0, or 1 for comparison result
}

function sortArray<T>(array: T[], compareFn: SortCallback<T>): T[] {
    // ...sorting logic using compareFn
}

// Intricate Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // Concatenation
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b; // Numeric addition
    }
    throw new Error("Invalid argument types");
}

// Key Concepts:

// Multiple Signatures: A clear contract of how the function behaves with different inputs.
// Implementation Signature: General enough to handle the overload cases.
// Type Guards: Differentiate between input types within the function body.