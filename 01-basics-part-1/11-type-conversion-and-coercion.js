// Got it 👍 Let’s go step by step and explain Type Conversion and Type Coercion in JavaScript with examples so you never get confused again.


// ---

// 🔹 1. Type Conversion (Explicit Conversion)

// 👉 When you manually convert one data type to another using built-in functions.
// Also called Type Casting.

// Examples:

// // String to Number
// let str = "123";
// let num = Number(str);   // Explicit conversion
// console.log(num);        // 123
// console.log(typeof num); // number

// // Number to String
// let n = 456;
// let s = String(n);
// console.log(s);          // "456"
// console.log(typeof s);   // string

// // Boolean to Number
// console.log(Number(true));   // 1
// console.log(Number(false));  // 0

// // Number to Boolean
// console.log(Boolean(0));     // false
// console.log(Boolean(123));   // true

// ✅ You control the conversion → predictable results.


// ---

// 🔹 2. Type Coercion (Implicit Conversion)

// 👉 When JavaScript automatically converts data types during an operation.
// JS does this to make expressions "work".

// Examples:

// // String + Number → String
// console.log("5" + 2);    // "52"   (number → string)

// // Number + Boolean
// console.log(5 + true);   // 6   (true → 1)

// // Number + null
// console.log(5 + null);   // 5   (null → 0)

// // Number + undefined
// console.log(5 + undefined);  // NaN

// // Subtraction (forces numbers)
// console.log("10" - "2"); // 8  (both → number)

// // Multiplication (forces numbers)
// console.log("6" * "2");  // 12

// ✅ JS decides the conversion automatically → sometimes unexpected results.


// ---

// 🔹 3. Key Differences

// Feature Type Conversion (Explicit) Type Coercion (Implicit)

// Who does it? You (developer) JavaScript
// Control Full control No control
// Example Number("123") → 123 "123" - 1 → 122
// Predictability Predictable Sometimes confusing



// ---

// 🔹 4. Quick Coercion Rules

// 1. + operator → prefers string concatenation.

// console.log("5" + 2);  // "52"


// 2. Other operators (-, *, /) → prefer number conversion.

// console.log("10" - "2"); // 8


// 3. Boolean rules:

// false → 0, true → 1

// 0, "", null, undefined, NaN → false

// Everything else → true





// ---

// ✅ In interviews, a simple way to say:

// > Type Conversion = manual, explicit, developer-controlled.
// Type Coercion = automatic, implicit, JS-controlled.




// ---

// Do you want me to also make a table of all coercion cases (string → number, boolean → number, etc.) for quick revision before interviews?