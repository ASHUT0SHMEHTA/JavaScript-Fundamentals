// Perfect 👍 Boolean logic is the heart of decision-making in JavaScript. Let’s cover all Boolean logic operators with examples and a truth table so you get crystal clear understanding.


// ---

// 🔹 1. Boolean Logic Operators in JS

// Operator Name Description

// && Logical AND Returns true if both conditions are true
  
// ! Logical NOT Inverts (reverses) a boolean value
// ?? Nullish Coalescing Returns right-hand side if left is null or undefined



// ---

// 🔹 2. Truth Tables

// (a) Logical AND (&&)

// A B A && B

// true true true
// true false false
// false true false
// false false false


// 👉 Example:

// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(5 > 3 && 10 > 2); // true (both are true)


// ---

// (b) Logical OR (||)

// | A     | B     | A || B | |-------|-------|--------| | true  | true  | true   | | true  | false | true   | | false | true  | true   | | false | false | false  |

// 👉 Example:

// console.log(true || false);   // true
// console.log(false || false);  // false
// console.log(5 > 10 || 10 > 2); // true (second condition true)


// ---

// (c) Logical NOT (!)

// A !A

// true false
// false true


// 👉 Example:

// console.log(!true);    // false
// console.log(!false);   // true
// console.log(!(5 > 3)); // false


// ---

// (d) Nullish Coalescing (??)

// 👉 Returns the first defined (non-null, non-undefined) value.

// A B A ?? B

// null "Hello" "Hello"
// undefined 100 100
// "Hi" "Hello" "Hi"


// 👉 Example:

// let userName = null;
// console.log(userName ?? "Guest"); // "Guest"

// let age = 0;
// console.log(age ?? 18); // 0 (because 0 is not null/undefined)


// ---

// 🔹 3. Combining Logic

// You can mix them:

// let age = 20;
// let isStudent = true;

// if (age > 18 && isStudent) {
//   console.log("Adult student");
// }

// if (age < 18 || isStudent) {
//   console.log("Either underage or a student"); 
// }

// console.log(!(age < 18)); // true (since age is not less than 18)


// ---

// ✅ Interview tip:

// && → all must be true

// || → at least one must be true

// ! → reverses result

// ?? → handles null/undefined fallback



// ---

// Do you want me to also add a single master truth table (A, B → results for &&, ||, !) so you can revise everything in one place quickly before interviews?