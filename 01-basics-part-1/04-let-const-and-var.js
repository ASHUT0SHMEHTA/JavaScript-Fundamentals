// JavaScript Variables: var, let, const

// 1. Definition

// Variables = containers for storing data.

// var, let, const → ways to declare variables in JS.

// Difference = scope, re-declaration, update ability.

// 2. var

// Old way to declare variables.

// Can be re-declared and updated.

// Scope = function/global.

// Hoisting = yes (undefined until assigned).

// Example:

var name = "Ashutosh";
name = "Rohit";
var name = "Rahul";
console.log(name); // Rahul

// Analogy: Cardboard box in common area → anyone can change/replace.

// 3. let

// Modern JS (ES6+)

// Can be updated, cannot re-declare in same scope.

// Scope = block { }.

// Hoisting = yes, but Temporal Dead Zone (TDZ).

// Example:

let age = 25;
age = 26; // Allowed
// let age = 27;  ❌ Not allowed

// Analogy: Personal locker in your room → change content, cannot duplicate name.

// 4. const

// Modern JS (ES6+)

// Cannot be updated or re-declared.

// Must initialize while declaring.

// Scope = block.

// Hoisting = yes, TDZ.

// Example:

const pi = 3.14;
// pi = 3.14159  Not allowed

const fruits = ["Apple", "Banana"];
fruits.push("Mango"); // Allowed
// fruits = ["Grapes"];  Not allowed

// Analogy: Sealed jar → cannot replace jar, but can adjust contents if allowed.
