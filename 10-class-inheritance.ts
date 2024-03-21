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
  rex.bark(); // Output: Woof!
  rex.move(5); // Output: Rex moved 5 meters.

  
//   Key Concepts:

//   Base Class (Animal): Defines the common characteristics.
//   Derived Class (Dog): Inherits from the base class and can add specialized behavior.
//   super: Used in the derived class's constructor to call the base class constructor.
//   Polymorphism: Dog can be used wherever an Animal is expected.