const rawJson = '{ "id": 123, "name": "Widget", "price": 9.99 }';
function parseProduct(jsonString) {
    try {
        const productData = JSON.parse(jsonString);
        // Ensure the parsed data has the correct structure 
        if (typeof productData.id === "number" &&
            typeof productData.name === "string" &&
            typeof productData.price === "number") {
            return productData; // Assertion if checks pass
        }
        else {
            return null; // Invalid product data
        }
    }
    catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
}
const product = parseProduct(rawJson);
if (product) {
    console.log("Product:", product);
}
else {
    console.log("Failed to parse product data");
}
