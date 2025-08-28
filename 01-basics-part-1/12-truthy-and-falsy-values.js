// Perfect 👍 This is a very important concept in JavaScript because it directly relates to conditions (if, while, etc.) and type coercion.
// Let’s break it down simply:


// ---

// 🔹 1. What are Truthy & Falsy Values?

// Falsy Values → Values that become false when converted to Boolean.

// Truthy Values → All other values (that are not falsy) become true.


// 👉 JavaScript automatically converts any value to true or false when used in a condition.


// ---

// 🔹 2. Falsy Values (only 7 in JS)

// There are only 7 falsy values in JavaScript:

// false
// 0        // Number zero
// -0       // Negative zero
// 0n       // BigInt zero
// ""       // Empty string
// null
// undefined
// NaN

// Examples:

// if (0) {
//   console.log("This will NOT run");
// } else {
//   console.log("0 is falsy");
// }

// if ("") {
//   console.log("This will NOT run");
// } else {
//   console.log("Empty string is falsy");
// }

// if (NaN) {
//   console.log("This will NOT run");
// } else {
//   console.log("NaN is falsy");
// }


// ---

// 🔹 3. Truthy Values

// 👉 Everything else is truthy (non-empty, non-zero, not null).
// Examples:

// if (123) console.log("123 is truthy");        // number
// if ("hello") console.log("Non-empty string"); // string
// if ([]) console.log("Empty array is truthy"); // array
// if ({}) console.log("Empty object is truthy");// object
// if ("0") console.log("String '0' is truthy"); // string, not number
// if ("false") console.log("'false' is truthy");// string


// ---

// 🔹 4. Key Notes

// false (boolean) is falsy, but "false" (string) is truthy.

// 0 is falsy, but "0" (string) is truthy.

// Empty array [] and empty object {} are truthy.



// ---

// 🔹 5. Use in Conditions

// let value = "";

// if (value) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");   // Runs because "" is falsy
// }


// ---

// ✅ In interviews you can say:

// > JavaScript has only 7 falsy values: false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy.
// This matters because conditions and type coercion rely on truthy/falsy evaluation.




// ---

// Do you want me to also make a Truth Table (value → Boolean(value)) for all these so you can revise super quickly before interviews?