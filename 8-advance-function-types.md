## Advanced TypeScript Functions

Advanced TypeScript functions encompass advanced techniques and patterns to enhance the flexibility, type safety, and functionality of functions.

## Function Overloads: Define multiple signatures for the same function, allowing it to handle different argument combinations.

```
function formatValue(value: number): string;
function formatValue(value: Date): string;
function formatValue(value: number | Date): string { ## Implementation
    // ...logic to format based on the input type
}
```

Description: Function overloads enable defining multiple signatures for a single function, allowing it to accept different types or combinations of arguments.

Explanation: In this example, the `formatValue` function is overloaded to accept either a `number` or a `Date` object as its argument, returning a formatted string based on the input type.

## Callback Functions with Specific Signatures

```
interface SortCallback<T> {
    (a: T, b: T): number; ## -1, 0, or 1 for comparison result
}

function sortArray<T>(array: T[], compareFn: SortCallback<T>): T[] {
    // ...sorting logic using compareFn
}
```

Description: Callback functions with specific signatures provide a clear contract for functions that accept callback arguments, ensuring type safety and predictable behavior.

Explanation: The `sortArray` function accepts an array of type `T` and a callback function `compareFn` with a specific signature for comparing elements. This allows for custom sorting logic while maintaining type safety.

## Intricate Function Overloads

```
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
    if (typeof a === "string" && typeof b === "string") {
        return a + b; ## Concatenation
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b; ## Numeric addition
    }
    throw new Error("Invalid argument types");
}
```

Description: Intricate function overloads demonstrate complex scenarios where a function handles multiple argument types with different behaviors.

Explanation: The `add` function is overloaded to handle both numeric and string arguments, performing concatenation for strings and numeric addition for numbers.

## Key Concepts:

- **Multiple Signatures**: Function overloads allow defining multiple signatures, enabling a single function to handle different argument combinations.
- **Implementation Signature**: The final implementation of the function should be general enough to handle all overload cases.
- **Type Guards**: Type guards, such as `typeof` checks, differentiate between input types within the function body, ensuring type safety and appropriate behavior.
