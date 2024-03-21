// Simple functions

// Calculate retangle area
function calculateRectangleArea(width: number, height: number): number {
    return width * height;
}

const area = calculateRectangleArea(5, 10);
console.log("Area:", area); // Output: Area: 50


// Greetings
function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

const greeting = greetUser("Alice");
console.log(greeting); // Output: Hello, Alice! 

// Complex functions

// Sorting with a Custom Comparator
interface Product {
    name: string;
    price: number;
}

function sortByPriceAscending(products: Product[]): Product[] {
    return products.sort((a, b) => a.price - b.price); 
}


// Fetching and Processing Data from an API
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

