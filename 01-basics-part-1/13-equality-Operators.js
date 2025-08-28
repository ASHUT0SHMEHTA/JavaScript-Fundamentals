// Alright 👍 let’s go one by one with Equality Operator and prompt in JavaScript.


// ---

// 🔹 1. Equality Operators

// JavaScript has two main equality operators:

// (a) == → Loose Equality

// Compares values only.

// If types are different, it does type coercion before comparing.


// Example:

// console.log(5 == "5");     // true  (string "5" → number 5)
// console.log(0 == false);   // true  (false → 0)
// console.log(null == undefined); // true (special case)


// ---

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