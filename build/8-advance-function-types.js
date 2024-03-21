function formatValue(value) {
    // ...logic to format based on the input type
}
function sortArray(array, compareFn) {
    // ...sorting logic using compareFn
}
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // Concatenation
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b; // Numeric addition
    }
    throw new Error("Invalid argument types");
}
// Key Concepts:
// Multiple Signatures: A clear contract of how the function behaves with different inputs.
// Implementation Signature: General enough to handle the overload cases.
// Type Guards: Differentiate between input types within the function body.
