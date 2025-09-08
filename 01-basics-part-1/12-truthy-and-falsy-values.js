// 📝 Truthy and Falsy Values in JavaScript (With Coercion)

// ---

// 1. Definition

// Every value in JavaScript can be treated as true or false in a boolean context.

// Values that evaluate to true → truthy

// Values that evaluate to false → falsy

// JavaScript automatically converts values to boolean in conditions (type coercion).

// ---

// 2. Falsy Values (7 main ones)

// Falsy Value Example

// false let isActive = false; if (isActive) { ... } else { console.log("Inactive"); } → Output: Inactive
// 0 let count = 0; if (count) { ... } else { console.log("Count is zero"); } → Output: Count is zero
// -0 let balance = -0; console.log(Boolean(balance)); → Output: false
// 0n let big = 0n; if (big) { ... } else { console.log("BigInt zero"); } → Output: BigInt zero
// "" let username = ""; if (username) { ... } else { console.log("No username"); } → Output: No username
// null let user = null; if (user) { ... } else { console.log("User not found"); } → Output: User not found
// undefined let data; if (data) { ... } else { console.log("Data undefined"); } → Output: Data undefined
// NaN let result = "abc" / 2; if (result) { ... } else { console.log("Result is NaN"); } → Output: Result is NaN

// ---

// 3. Truthy Values (everything else)

// Numbers other than 0 or -0 → 1, -5, 3.14

// let score = 10;
// if (score) console.log("Score exists"); // Output: Score exists

// Non-empty strings → "Hi", "0"

// let city = "Delhi";
// if (city) console.log("City provided"); // Output: City provided

// Arrays → []

// let arr = [];
// if (arr) console.log("Array exists"); // Output: Array exists

// Objects → {}

// let obj = {};
// if (obj) console.log("Object exists"); // Output: Object exists

// Functions → function(){}

// let fn = function() {};
// if (fn) console.log("Function exists"); // Output: Function exists

// ---

// 4. Type Coercion in Action

// Automatic conversion happens when values are used in boolean context:

// console.log(Boolean("Hello")); // true
// console.log(Boolean(""));      // false
// console.log(Boolean(42));      // true
// console.log(Boolean(0));       // false
// console.log(Boolean([]));      // true
// console.log(Boolean({}));      // true
// console.log(Boolean(null));    // false

// In if statements:

// let email = "";
// if (email) {
//   console.log("Email exists");
// } else {
//   console.log("No email provided"); // Output
// }

// let cartItems = ["apple"];
// if (cartItems) {
//   console.log("Cart has items"); // Output
// }

// ---

// 5. Real-life Analogy

// Truthy = Things that are considered “present” or “valid”

// Example: You go to a shop with money → you can buy items → truthy

// Falsy = Things that are considered “absent” or “empty”

// Example: You go to a shop with no money → cannot buy anything → falsy

// JavaScript automatically checks presence whenever a decision is needed.

// ---

// 6. Quick Revision Notes

// 1. Falsy values = false, 0, -0, 0n, "", null, undefined, NaN

// 2. Everything else = Truthy

// 3. Boolean coercion happens automatically in if, while, &&, ||, !

// 4. Use Boolean(value) to check explicitly if unsure

// ---

// If you want, I can also make a single combined code block with all truthy and falsy examples together, ready to copy-paste and test, so you don’t have to run each separately.

// Do you want me to do that?
