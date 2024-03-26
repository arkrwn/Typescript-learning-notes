## TypeScript Operators

Operators in TypeScript are symbols that perform specific operations on operands (variables or values).

## Assignment Operator (=)

```
let value: number = 10;
```

Description: The assignment operator (=) assigns the value on the right to the variable on the left.

Explanation: In this example, the variable `value` is assigned the value `10`.

## Comparison Operators

```
let isEqual: boolean = value == 10; ## true
let isNotEqual: boolean = value != 5; ## true
let isGreater: boolean = value > 8; ## true
let isLess: boolean = value < 20; ## true
let isGreaterOrEqual: boolean = value >= 10; ## true
let isLessOrEqual: boolean = value <= 15; ## true
```

Description: Comparison operators compare two values and return a boolean indicating the result of the comparison.

Explanation: In these examples, various comparison operators (==, !=, >, <, >=, <=) are used to compare the variable `value` with other values.

## Logical Operators

```
let isActive: boolean = true;
let hasPermission: boolean = false;

let result1: boolean = isActive && hasPermission; ## false
let result2: boolean = isActive || hasPermission; ## true
let result3: boolean = !isActive; ## false
```

Description: Logical operators perform logical operations on boolean values and return a boolean result.

Explanation: In these examples, logical AND (&&), logical OR (||), and logical NOT (!) operators are used to combine boolean values or negate them.

## String Concatenation (+)

```
let firstName: string = "Alice";
let lastName: string = "Smith";
let fullName: string = firstName + " " + lastName; ## "Alice Smith"
```

Description: The string concatenation operator (+) combines two strings into a single string.

Explanation: In this example, the variables `firstName` and `lastName` are concatenated to form the `fullName`.

## Typeof Operator

```
let message: string = "Hello";
let typeOfMessage: string = typeof message; ## typeOfMessage will be "string"
```

Description: The typeof operator returns the data type of its operand.

Explanation: In this example, the typeof operator is used to determine the data type of the variable `message`.

## Conditional (Ternary) Operator (Shorthand for if-else)

```
let age: number = 25;
let isAdult: boolean = age >= 18 ? true : false; ## isAdult will be true

// Example using strings

let greeting: string = age < 18
? "Welcome, young one"
: "Greetings, adult";
```

Description: The conditional (ternary) operator provides a shorthand for the if-else statement.

Explanation: In these examples, the conditional operator is used to check if `age` is greater than or equal to `18`, and based on the result, assign `true` or `false` to `isAdult`, and assign different greetings based on the age.

## Key Points:

- TypeScript supports various operators, including assignment, comparison, logical, string concatenation, typeof, and conditional operators.
- Understanding operators is essential for performing operations and making decisions in TypeScript code.
