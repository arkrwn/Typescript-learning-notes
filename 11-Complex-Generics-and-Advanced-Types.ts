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
points.sort((a, b) => a.value.compareTo(b.value)); // Works seamlessly

// Key Concepts:

// Generic Constraints: extends Comparable<T> ensures only comparable types are used.
// Interface Implementation: NumberPoint must provide a compareTo method.
// Type Inference: TypeScript figures out the types when creating NumberPoint instances.