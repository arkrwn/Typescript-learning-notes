## Complex-Generics-and-Advanced-Types in TypeScript

Complex generics and advanced types in TypeScript provide powerful tools for creating flexible and type-safe code, especially when dealing with generic constraints and interfaces.

```
interface Comparable<T> {
    compareTo(other: T): number;
}

class DataPoint<T extends Comparable<T>> {
    constructor(public value: T) {}
}

class NumberPoint extends DataPoint<number> implements Comparable<number> {
    compareTo(other: number): number {
        return this.value - other;
    }
}

const points: DataPoint<any>[] = [new NumberPoint(10), new NumberPoint(5)];
points.sort((a, b) => a.value.compareTo(b.value)); ## Works seamlessly
```

Description: This example demonstrates how to create complex generic types and utilize advanced types like interfaces to ensure type safety and flexibility.

Explanation: The `Comparable` interface defines a method `compareTo` that returns a number, allowing for comparison between instances of the same type. The `DataPoint` class takes a generic type `T` that must extend `Comparable<T>`, ensuring that only comparable types can be used with `DataPoint`. The `NumberPoint` class extends `DataPoint<number>` and implements `Comparable<number>`, providing a `compareTo` method specific to numbers. Finally, an array of `DataPoint` instances is sorted based on their values using the `compareTo` method, demonstrating seamless interoperability between complex generics and advanced types.

## Key Concepts:

- **Generic Constraints**: Using `extends Comparable<T>` ensures that only comparable types can be used with the `DataPoint` class, enhancing type safety.
- **Interface Implementation**: The `NumberPoint` class must provide a `compareTo` method as required by the `Comparable<number>` interface, enforcing adherence to the interface contract.
- **Type Inference**: TypeScript infers the types when creating `NumberPoint` instances, reducing the need for explicit type annotations and improving code readability.
