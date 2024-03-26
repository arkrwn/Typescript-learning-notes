## Type annotations for the complete set of basic types

### Primitive Types

- `isComplete: boolean = false;`: This variable `isComplete` is of type boolean and is initialized with the value `false`.
- `stock: number = 10;`: This variable `stock` is of type number and is initialized with the value `10`.
- `greeting: string = "Welcome!";`: This variable `greeting` is of type string and is initialized with the value `"Welcome!"`.
- `largeNumber: bigint = 900719925474099100n;`: This variable `largeNumber` is of type bigint and is initialized with a large number.
- `unique: symbol = Symbol("unique");`: This variable `unique` is of type symbol and is initialized with a unique symbol.

### Special Types

- `nothingHere: null = null;`: This variable `nothingHere` is of type null and is assigned the value `null`.
- `notAssigned: undefined;`: This variable `notAssigned` is declared but not assigned a value, hence its type is `undefined`.

### Structural Types

- `interface Product { name: string; price: number; }`: This defines an interface `Product` with `name` and `price` properties.
- `product: Product = { name: "Tablet", price: 500 };`: This variable `product` is of type `Product` and represents a product object with a name and a price.
- `colors: string[] = ["Red", "Green", "Blue"];`: This variable `colors` is an array of strings initialized with colors.
- `scores: number[] = [85, 90, 78];`: This variable `scores` is an array of numbers initialized with scores.

### Utility Types (some common examples)

- `anythingGoes: unknown = 42;`: This variable `anythingGoes` is of type unknown and is assigned the value `42`.
- `neverReturns: never;`: This variable `neverReturns` is declared but never assigned a value, indicating it will never have a value.
- `flexibleType: number | string;`: This variable `flexibleType` can hold either a number or a string.

### Function with Type Annotations

```typescript
function calculateArea(width: number, height: number): number {
  return width * height;
}
```

#### Key Points:

- Type annotations in TypeScript allow you to explicitly specify the type of a variable.
- Primitive types include boolean, number, string, bigint, and symbol.
- Special types such as null and undefined represent absence of value and uninitialized variables, respectively.
- Structural types can be defined using interfaces to specify the structure of objects.
- Arrays in TypeScript can be defined using square brackets followed by the type of elements.
- Utility types provide additional features for working with types, such as unknown and never.
- Functions can also have type annotations for parameters and return types, ensuring type safety and clarity.
