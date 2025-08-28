// Okay 👍 let’s break it down simply.

// Logical Operators in JavaScript

// Logical operators are used to make decisions based on true/false (boolean) values.


// ---

// 1. AND (&&)

// ✅ Returns true if both conditions are true, otherwise false.

// Example:

// let age = 20;
// let hasID = true;

// if (age >= 18 && hasID) {
//   console.log("You can enter the club.");
// } else {
//   console.log("Entry denied.");
// }

// 👉 Here, age >= 18 is true, and hasID is true, so the output is:
// You can enter the club.


// ---

// 2. OR (||)

// ✅ Returns true if at least one condition is true, otherwise false.

// Example:

// let isWeekend = true;
// let isHoliday = false;

// if (isWeekend || isHoliday) {
//   console.log("You can relax today!");
// } else {
//   console.log("Go to work.");
// }

// 👉 Here, one condition (isWeekend) is true, so the result is:
// You can relax today!


// ---

// 3. NOT (!)

// ✅ Reverses (negates) the value.

// If true → becomes false.

// If false → becomes true.


// Example:

// let isRaining = false;

// if (!isRaining) {
//   console.log("Let's go for a walk.");
// } else {
//   console.log("Stay home.");
// }

// 👉 Since isRaining = false, !isRaining = true, so output is:
// Let's go for a walk.


// ---

// ⚡ In short:

// && → both must be true

// || → at least one true

// ! → opposite



// ---

// Do you want me to also make a truth table for these operators (like AND/OR/NOT in table form) so it’s super clear for interviews?