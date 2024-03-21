// Bitwise Operators (Manipulate values at the bit level)

let a: number = 5;      // 00000101 (binary)
let b: number = 3;      // 00000011 (binary)

// Bitwise AND (&)
let andResult: number = a & b;  // 00000001 (binary) -> 1 (decimal)

// Bitwise OR (|)
let orResult: number = a | b;   // 00000111 (binary) -> 7 (decimal)

// Bitwise XOR (^)
let xorResult: number = a ^ b;  // 00000110 (binary) -> 6 (decimal)

// Bitwise NOT (~)
let notResult: number = ~a;     // -6 (decimal - two's complement) 

// Left Shift (<<)
let leftShiftResult: number = a << 2;  // 00010100 (binary) -> 20 (decimal)

// Right Shift (>>)
let rightShiftResult: number = a >> 2; // 00000001 (binary) -> 1 (decimal)

// Zero-fill Right Shift (>>>) - Use for unsigned numbers
let unsignedRightShift: number = 255 >>> 2; // 00111111 (binary) -> 63 (decimal)
