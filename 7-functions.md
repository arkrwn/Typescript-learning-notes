## TypeScript Functions

Functions in TypeScript are blocks of code designed to perform a specific task. They allow for modular and reusable code, enhancing readability and maintainability.

## Simple functions

### Calculate rectangle area

```
function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}

const area = calculateRectangleArea(5, 10);
console.log("Area:", area); ## Output: Area: 50
```

Description: Simple functions perform basic tasks and typically have a single responsibility.

Explanation: In this example, the `calculateRectangleArea` function takes two parameters, `width` and `height`, and returns the area of a rectangle by multiplying them.

### Greetings

```
function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

const greeting = greetUser("Alice");
console.log(greeting); ## Output: Hello, Alice!
```

Description: Another simple function that takes a name parameter and returns a greeting message.

Explanation: The `greetUser` function receives a `name` parameter and concatenates it with a greeting message to create a personalized greeting.

## Complex functions

## Sorting with a Custom Comparator

```
interface Product {
    name: string;
    price: number;
}

function sortByPriceAscending(products: Product[]): Product[] {
    return products.sort((a, b) => a.price - b.price);
}
```

Description: Complex functions handle more intricate tasks or operations that require additional logic or processing.

Explanation: The `sortByPriceAscending` function sorts an array of products based on their prices in ascending order using a custom comparator function.

## Fetching and Processing Data from an API

```
interface ApiResponse {
    data: {
        items: { id: number, title: string }[];
    };
}

async function fetchAndProcessData(url: string): Promise<string[]> {
    const response = await fetch(url);
    const jsonData: ApiResponse = await response.json();

    return jsonData.data.items.map(item => item.title);
}
```

Description: This complex function demonstrates asynchronous behavior and data processing, such as fetching data from an API and transforming it.

Explanation: The `fetchAndProcessData` function asynchronously fetches data from a specified URL, parses the JSON response, and extracts and returns an array of titles from the response data.

## Key Points:

- Functions in TypeScript encapsulate reusable code blocks to perform specific tasks.
- Simple functions handle basic operations with a single responsibility, while complex functions manage more intricate tasks with additional logic or processing.
- Understanding function parameters, return types, and asynchronous behavior is crucial for developing efficient and scalable TypeScript applications.
