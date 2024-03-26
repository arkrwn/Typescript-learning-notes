## TypeScript Generic type flexibilities

Generic types in TypeScript provide flexibility and reusability by allowing functions, interfaces, and classes to work with various data types while maintaining type safety.

## Generic Functions: Work with various data types without sacrificing type safety.

```
function getFirstElement<T>(items: T[]): T | undefined {
    return items.length > 0 ? items[0] : undefined;
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["hello", "world"]);
```

Description: Generic functions enable working with different data types without compromising type safety.

Explanation: The `getFirstElement` function accepts an array of type `T` and returns the first element of the array, preserving the type of the elements.

## Generic Interfaces and Classes: Create reusable structures.

```
interface Result<T> {
    success: boolean;
    data?: T; ## Holds associated data if successful
    error?: Error; ## Holds potential error
}
```

Description: Generic interfaces and classes allow creating reusable structures that can work with different data types.

Explanation: The `Result` interface defines a structure with a `success` flag and optional `data` and `error` fields, where `data` can hold any type of associated data, and `error` can hold any error object.

## Error Handling with try/catch

```
function fetchData(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        if (!response.ok) { ## Check for HTTP errors
            throw new Error(`Network response error: ${response.status}`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; ## Re-throw to allow for handling at a higher level
    }
}
```

Description: Error handling with try/catch blocks allows managing potential runtime errors gracefully, preventing crashes and enabling error propagation.

Explanation: The `fetchData` function attempts to fetch data from a URL using the Fetch API and handles potential errors using a try/catch block, logging errors to the console and re-throwing them for higher-level handling.

## Custom Error Classes

```
class ValidationError extends Error {
    constructor(public fields: string[]) {
        super("Invalid input data");
    }
}

function validateData(data: unknown) {
    if (typeof data !== "object" || data === null || !Array.isArray(data.items)) {
        throw new ValidationError(["items"]);
    }
    ## ... further validation logic
}
```

### Key Concepts:

- **Extending Error**: Your custom error inherits built-in error behavior, enabling consistent error handling.
- **Custom Properties**: Store error-specific details, such as invalid fields, for precise error identification and resolution.

## Key Points:

- **Function Overloads**: Provide elegance for functions with multiple input scenarios.
- **Generics**: Enable writing type-safe code adaptable to different data types.
- **try/catch**: Manage potential runtime errors gracefully, preventing crashes.
- **Custom Error Types**: Model specific error conditions for your application, enhancing error handling and debugging.
