// Type Conversion and Type Coercion in JavaScript

// 1. Introduction

// JavaScript has dynamic types, which means variables can hold different types of values (number, string, boolean, etc.).

// Sometimes, we need to change the type to perform operations correctly.

// There are two ways this happens:

// 1. Type Conversion (Explicit) → You convert manually.

// 2. Type Coercion (Implicit) → JavaScript converts automatically.

// 1. Type Conversion (Manual / Explicit)

// Type Conversion is when the programmer explicitly changes the type of a value.

// Examples:

// (a) String → Number

let strAge = "30";
let numAge = Number(strAge);
console.log(numAge); // 30
console.log(typeof numAge); // number

// (b) Number → String

let year = 2025;
let strYear = String(year);
console.log(strYear); // "2025"
console.log(typeof strYear); // string

// (c) Boolean → Number

let isStudent = false;
let numStudent = Number(isStudent);
console.log(numStudent); // 0

// (d) Number → Boolean

let points = 5;
let boolPoints = Boolean(points);
console.log(boolPoints); // true

// Key Points:

// Programmer controls the conversion.

// Always explicit.

// Prevents unexpected results in calculations.

// ---

// 2. Type Coercion (Automatic / Implicit)

// Definition:

// Type Coercion happens when JavaScript automatically converts a value to complete an operation.

// Examples:

// (a) String + Number → String

let strVal = "50";
let result = strVal + 25;
console.log(result); // "5025" (25 converted to string)

// (b) String - Number → Number

let strNum = "100";
let result2 = strNum - 40;
console.log(result2); // 60 (string "100" converted to number)

// (c) Boolean + Number → Number

let isTrue = true;
let sum = isTrue + 10;
console.log(sum); // 11 (true → 1)

// (d) Boolean + String → String

let isFalse = false;
let text = isFalse + " is the value";
console.log(text); // "false is the value"

// (e) Comparisons with ==

console.log("5" == 5); // true (string "5" converted to number)
console.log(0 == false); // true (false converted to 0)

// Key Points:

// Happens automatically in operations like +, -, ==.

// Can sometimes give unexpected results.

// Important to understand to avoid bugs.

// ---

// 4. Comparison Table

// Feature Type Conversion Type Coercion

// How it happens Manual (explicit) Automatic (implicit)
// Control Programmer controls it JavaScript decides
// Examples Number("5") → 5 "5" + 2 → "52"
// Purpose Explicit conversion To make operations work automatically

// ---

// 5. Real-life Analogy

// Type Conversion: You convert currency manually before traveling.

// Example: You exchange 100 USD → 8200 INR yourself.

// Type Coercion: The currency machine automatically converts your money when you insert it.

// Example: You put 100 USD in the machine → it gives 8200 INR automatically.

// ---
