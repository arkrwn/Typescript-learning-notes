## Class in TypeScript

Classes in TypeScript provide a way to create blueprints for objects, encapsulating data and behavior into a single unit. They support inheritance, polymorphism, and encapsulation, facilitating object-oriented programming principles.

```
class Animal {
constructor(public name: string) {}

    move(distance: number) {
      console.log(`${this.name} moved ${distance} meters.`);
    }

}

class Dog extends Animal {
bark() {
console.log("Woof!");
}
}

const rex = new Dog("Rex");
rex.bark(); ## Output: Woof!
rex.move(5); ## Output: Rex moved 5 meters.
```

Description: Classes allow defining blueprints for objects with properties and methods. In this example, `Animal` is a base class with a `move` method, and `Dog` is a derived class inheriting from `Animal` and adding a `bark` method.

Explanation: The `Animal` class encapsulates common characteristics shared by animals, such as a name and the ability to move. The `Dog` class extends `Animal` to inherit its behavior while adding specialized behavior, such as barking.

## Key Concepts:

- **Base Class (Animal)**: Defines the common characteristics shared by all animals.
- **Derived Class (Dog)**: Inherits from the base class and can add specialized behavior specific to dogs.
- **super**: Used in the derived class's constructor to call the base class constructor, initializing inherited properties.
- **Polymorphism**: Instances of the derived class (`Dog`) can be treated as instances of the base class (`Animal`), allowing for flexibility and code reusability.
