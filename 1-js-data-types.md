## Learning Module: JavaScript Control Flow

In JavaScript, control flow statements allow you to control the flow of execution in your code. Mastering these control flow structures is essential for writing efficient and structured programs. Let's delve into various control flow mechanisms in JavaScript along with examples.

### 1. if...else Statement

```javascript
let condition = true;

if (condition) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
```

Explanation: The `if...else` statement allows you to execute different blocks of code based on whether a condition evaluates to true or false.

### 2. switch Statement

```javascript
let option = 2;

switch (option) {
  case 1:
    console.log("Option 1 selected");
    break;
  case 2:
    console.log("Option 2 selected");
    break;
  default:
    console.log("Invalid option");
}
```

Explanation: The `switch` statement provides a way to execute different code blocks based on the value of an expression.

### 3. for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Explanation: The `for` loop iterates over a block of code a specified number of times.

### 4. while Loop

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

Explanation: The `while` loop executes a block of code as long as a specified condition is true.

### 5. do...while Loop

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

Explanation: The `do...while` loop is similar to the `while` loop but ensures that the block of code is executed at least once, even if the condition is false initially.

### Key Points:

- Control flow statements in JavaScript help in making decisions and looping through code.
- `if...else` statements are used for conditional branching.
- `switch` statements provide an alternative to multiple `if` statements.
- `for`, `while`, and `do...while` loops are used for repetitive execution of code blocks.
- Proper indentation and code formatting improve code readability and maintainability.
