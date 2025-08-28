// 1.Primitive Data Types in JavaScript

// Primitive types are the basic data types in JavaScript.
// They store single values directly (copy by value).
// They are immutable (cannot be changed).
// JavaScript has 7 primitive data types.

// 1.Number

// Represents numeric values (integer, float, NaN, Infinity).

let age = 25;        // integer
let price = 99.99;   // decimal
let temp = -5;       // negative number

// 2.String

// Represents text (characters inside quotes).

let name = "Ashutosh";
let city = 'Delhi';

// 3.Boolean

// Represents logical values → true or false.

let isLoggedIn = true;
let hasPermission = false;

// 4.Undefined

// A variable that is declared but not assigned a value.

let x;
console.log(x); // undefined

// 5. Null

// Represents an intentional empty value.

let data = null;

// 6.Symbol (ES6)

// Represents a unique and immutable identifier.

let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(id1 === id2); // false

// 7.BigInt (ES2020)

// Represents very large integers beyond the limit of Number.

let bigNumber = 123456789012345678901234567890n;

