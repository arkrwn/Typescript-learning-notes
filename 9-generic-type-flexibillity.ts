// Generic Functions: Work with various data types without sacrificing type safety.
function getFirstElement<T>(items: T[]): T | undefined {
    return items.length > 0 ? items[0] : undefined;
}

const firstNumber = getFirstElement<number>([1, 2, 3]);  
const firstString = getFirstElement<string>(["hello", "world"]);  

// Generic Interfaces and Classes: Create reusable structures.
interface Result<T> {
    success: boolean;
    data?: T; // Holds associated data if successful
    error?: Error; // Holds potential error
}

// Error Handling with try/catch
function fetchData(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        if (!response.ok) { // Check for HTTP errors
            throw new Error(`Network response error: ${response.status}`); 
        }
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw to allow for handling at a higher level
    }
 }

 
// Key Points

// Function Overloads: Elegance for functions with multiple input scenarios.
// Generics: Write type-safe code adaptable to different data types.
// try/catch: Manage potential runtime errors preventing crashes.
// Custom Error Types: Model specific error conditions for your application.

// Custom Error Classes
class ValidationError extends Error {
    constructor(public fields: string[]) {
      super("Invalid input data");
    }
  }
  
  function validateData(data: unknown) {
    if (typeof data !== "object" || data === null || !Array.isArray(data.items)) {
      throw new ValidationError(["items"]);
    }
    // ... further validation logic
  }

// Key Concepts:

// Extending Error: Your custom error inherits built-in error behavior.
// Custom Properties: Store error-specific details (e.g., invalid fields).