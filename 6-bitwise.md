## TypeScript Bitwise

Bitwise operators in TypeScript are used to manipulate values at the bit level.

## Bitwise Operators (Manipulate values at the bit level)

```
let a: number = 5; ## 00000101 (binary)
let b: number = 3; ## 00000011 (binary)
```

Description: Bitwise operators perform operations on individual bits of binary representations of numbers.

Explanation: In this example, variables `a` and `b` are assigned decimal values, but their binary representations are also provided for illustration.

## Bitwise AND (&)

```
let andResult: number = a & b; ## 00000001 (binary) -> 1 (decimal)
```

Description: The bitwise AND operator (&) performs a bitwise AND operation between corresponding bits of two operands.

Explanation: In this example, the bitwise AND operation is performed on `a` and `b`, resulting in `1` (decimal).

## Bitwise OR (|)

```
let orResult: number = a | b; ## 00000111 (binary) -> 7 (decimal)
```

Description: The bitwise OR operator (|) performs a bitwise OR operation between corresponding bits of two operands.

Explanation: In this example, the bitwise OR operation is performed on `a` and `b`, resulting in `7` (decimal).

## Bitwise XOR (^)

```
let xorResult: number = a ^ b; ## 00000110 (binary) -> 6 (decimal)
```

Description: The bitwise XOR operator (^) performs a bitwise XOR (exclusive OR) operation between corresponding bits of two operands.

Explanation: In this example, the bitwise XOR operation is performed on `a` and `b`, resulting in `6` (decimal).

## Bitwise NOT (~)

```
let notResult: number = ~a; ## -6 (decimal - two's complement)
```

Description: The bitwise NOT operator (~) performs a bitwise NOT (complement) operation on its operand, reversing the bits.

Explanation: In this example, the bitwise NOT operation is performed on `a`, resulting in `-6` (decimal) due to two's complement representation.

## Left Shift (<<)

```
let leftShiftResult: number = a << 2; ## 00010100 (binary) -> 20 (decimal)
```

Description: The left shift operator (<<) shifts the bits of its operand to the left by a specified number of positions.

Explanation: In this example, the bits of `a` are shifted to the left by `2` positions, resulting in `20` (decimal).

## Right Shift (>>)

```
let rightShiftResult: number = a >> 2; ## 00000001 (binary) -> 1 (decimal)
```

Description: The right shift operator (>>) shifts the bits of its operand to the right by a specified number of positions.

Explanation: In this example, the bits of `a` are shifted to the right by `2` positions, resulting in `1` (decimal).

## Zero-fill Right Shift (>>>) - Use for unsigned numbers

```
let unsignedRightShift: number = 255 >>> 2; ## 00111111 (binary) -> 63 (decimal)
```

Description: The zero-fill right shift operator (>>>) shifts the bits of its operand to the right by a specified number of positions, filling the leftmost positions with zeros.

Explanation: In this example, the bits of `255` are shifted to the right by `2` positions, resulting in `63` (decimal).

## Key Points:

- Bitwise operators in TypeScript manipulate values at the bit level, performing operations such as AND, OR, XOR, NOT, left shift, and right shift.
- Understanding bitwise operators is essential for low-level operations, such as binary manipulation and optimizing code for performance.
