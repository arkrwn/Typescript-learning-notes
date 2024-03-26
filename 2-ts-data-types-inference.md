## Type Inference with the Complete Set of Basic Types

In TypeScript, type inference allows the compiler to automatically determine the types of variables based on their values. Let's explore type inference with the complete set of basic types.

### Primitive Types

```typescript
let isActive = true; // boolean
let count = 10; // number
let message = "Hello"; // string
let code = 900719925474099100n; // bigint
let uniqueId = Symbol("unique"); // symbol
```

Explanation: Primitive types are the most basic data types in TypeScript. Here, we have examples of boolean, number, string, bigint, and symbol.

### Special Types

```typescript
let emptyValue = null;
let unassignedValue; // Inferred as 'undefined'
```

Explanation: Special types include `null` and `undefined`, which represent the absence of value and uninitialized variables, respectively.

### Structural Types

```typescript
interface Person {
  name: string;
  age: number;
}

let person = { name: "Jane", age: 25 }; // Object
```

Explanation: Structural types involve defining custom data structures using interfaces. Here, the `Person` interface defines the structure of a person object with `name` and `age` properties.

```typescript
let numbers = [1, 2, 3]; // Array of numbers
let names = ["Alice", "Bob"]; // Array of strings
```

Explanation: Arrays can hold multiple values of the same type. Here, we have arrays of numbers and strings.

### Utility Types (Some Common Examples)

```typescript
let someValue: unknown = "This could be anything";
let nothing: never;
let someStringOrNumber: string | number; // Union type
```

Explanation: Utility types provide additional features for working with types. `unknown` represents a type-safe counterpart of `any`. `never` represents a type that never occurs. `string | number` is a union type, allowing a variable to hold either a string or a number.

### Functions

```typescript
function sum(x: number, y: number): number {
  return x + y;
}
```

Explanation: Functions in TypeScript can specify parameter types and return types. Here, the `sum` function takes two parameters of type number and returns a number.

### Key Points:

- Type inference in TypeScript allows for cleaner and more concise code by automatically deducing types based on context.
- TypeScript uses type inference to infer types for variables, function return types, and parameters based on their usage and - context.
- While type inference can be convenient, it's important to ensure that the inferred types match the intended types to avoid unexpected behavior.
