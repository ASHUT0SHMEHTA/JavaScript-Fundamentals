// Assignment Operators

// 1. Assignment (=)

//  Directly assigns a value to a variable.

//Example:

let x = 2;
const y = 3;

console.log(x); // Expected output: 2
console.log((x = y + 1)); // 3 + 1 // Expected output: 4
console.log((x = x * y)); // 4 * 3 // Expected output: 12

// 2. Addition assignment (+=)

// Adds a value to the variable and assigns the result back.

//Example:

let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"

// 3. Subtraction assignment (-=)

// Subtracts a value from the variable and assigns the result back.

//Example:

let marks = 12;

console.log((marks -= 5));
// Expected output: 7

let coins = 4;

console.log((coins -= "Gold"));
// Expected output: NaN
// ---

// 4. Multiplication assignment (*=)

// 👉 Multiplies the variable by a value and assigns the result back.
//Example:
let price = 15;
console.log((price *= 3));
console.log((price *= "hello"));

// 5. Division assignment (/=)

// 👉 Divides the variable by a value and assigns the result back.
//Example:
let score = 9;

score /= 3;
console.log(score);
// Expected output: 3

let balance = 10;

balance /= 0;
console.log(balance);
// Expected output: Infinity

let number = 15;

number /= "exam";
console.log(number);
// Expected output: NaN

// 6. %= (Remainder and Assign)

// 👉 Stores the remainder after division.
//Example:
let point = 7;

console.log((point %= 4));
// Expected output: 3

let accountbalance = 5;

console.log((accountbalance %= 0));
// Expected output: NaN

let totalcoins = 10;

console.log((coins %= "gold"));
// Expected output: NaN
// ➡️ 22 ÷ 5 leaves a remainder of 2 → result = 2.

// ---

// 7. **= (Exponentiation and Assign)

// 👉 Raises the variable to the power of a value and assigns the result back.
//Example:
let num = 3;

console.log((num **= 2));
// Expected output: 9

let value = 5;

// Expected output: 1

let points = 4;

console.log((points **= "hello"));
// Expected output: NaN
// ---
