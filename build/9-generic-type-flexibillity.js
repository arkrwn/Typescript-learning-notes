var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Generic Functions: Work with various data types without sacrificing type safety.
function getFirstElement(items) {
    return items.length > 0 ? items[0] : undefined;
}
var firstNumber = getFirstElement([1, 2, 3]);
var firstString = getFirstElement(["hello", "world"]);
// Error Handling with try/catch
function fetchData(url) {
    try {
        var response = yield fetch(url);
        if (!response.ok) { // Check for HTTP errors
            throw new Error("Network response error: ".concat(response.status));
        }
        var data = yield response.text();
        return data;
    }
    catch (error) {
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
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(fields) {
        var _this = _super.call(this, "Invalid input data") || this;
        _this.fields = fields;
        return _this;
    }
    return ValidationError;
}(Error));
function validateData(data) {
    if (typeof data !== "object" || data === null || !Array.isArray(data.items)) {
        throw new ValidationError(["items"]);
    }
    // ... further validation logic
}
// Key Concepts:
// Extending Error: Your custom error inherits built-in error behavior.
// Custom Properties: Store error-specific details (e.g., invalid fields).
