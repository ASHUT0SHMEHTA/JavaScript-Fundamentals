// 1.var

//Old way of declaring variables (before ES6).

// Function-scoped (visible inside the whole function).

// Can be re-declared and updated.

// Gets hoisted (moved to top of scope with undefined).

// Example:

var name = "John";
var name = "Alice";   // allowed (re-declare)
name = "Bob";         // allowed (update)

console.log(name); // "Bob"

// 2.let

// Introduced in ES6.

// Block-scoped (only available inside { }).

// Cannot be re-declared in the same scope, but can be updated.

// Hoisted but not initialized (Temporal Dead Zone).

// Example:

let age = 25;
// let age = 30; not allowed (re-declare in same scope)
age = 30;          // allowed (update)

console.log(age); // 30

// 3. const

// Introduced in ES6.

// Block-scoped.

// Cannot be re-declared and cannot be updated.

// Must be initialized at the time of declaration.

// Example:

const PI = 3.14;
// const PI = 3.1416;  not allowed (re-declare)
// PI = 3.1416;        not allowed (update)

console.log(PI); // 3.14
