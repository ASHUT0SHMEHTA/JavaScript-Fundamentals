// Alright 👍 let’s go one by one with Equality Operator and prompt in JavaScript.

// 1. == (Equal to)

// Checks if values are equal (ignores type).

let x = 5;
console.log(x == "5"); // true → values are same (5), type ignore

// 2. === (Strict Equal to)

// Checks if values and types are both equal.

let y = 5;
console.log(y === "5"); // false → value same but type different (number vs string)

// 3. != (Not Equal to)

// Checks if values are not equal (ignores type).

let marks = 80;
console.log(marks != "80"); // false → values are same, type ignored

// 4. !== (Strict Not Equal to)

// Checks if value or type is not equal.

let age = 18;
console.log(age !== "18"); // true → value same but type different

// (b) === → Strict Equality

// Compares values + data types.

// No type coercion.

// Example:

// console.log(5 === "5");    // false  (number vs string)
// console.log(0 === false);  // false  (number vs boolean)
// console.log(null === undefined); // false (different types)
// console.log(100 === 100);  // true

// ✅ Interview tip:

// > Use === (strict equality) to avoid unexpected results caused by coercion.

// ---

// 🔹 2. prompt() in JavaScript

// 👉 prompt() is a browser method used to take user input.

// It always returns string input (or null if canceled).

// Example:

// // Taking user input
// let age = prompt("Enter your age:");

// // Check with equality operators
// if (age == 18) {
//   console.log("You entered 18 (loose check, works for string '18')");
// }

// if (age === 18) {
//   console.log("Strict check: This will NOT run, because age is a string");
// } else {
//   console.log("Strict check failed: input is string, not number");
// }

// 👉 To fix strict check:

// let age = Number(prompt("Enter your age:")); // Convert input to number

// if (age === 18) {
//   console.log("Now works correctly with strict equality");
// }

// ---

// ✅ Key Difference Recap:

// == → compares values (with type coercion).

// === → compares values + type (no coercion).

// prompt() → takes string input from the user (convert to number if needed).

// ---

// Do you want me to also show you a small real-world project using prompt() (like a mini login system or calculator) so you can see equality operators and prompt working together?
