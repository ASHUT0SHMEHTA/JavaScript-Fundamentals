// 1.Primitive Data Types in JavaScript

// In programming, a primitive data type is a basic data type provided by the language itself. It's not an object and represents a single, simple value. Operations on primitives are typically faster because they are stored directly in memory where the variable is accessed. they are immutable (cannot be changed). JavaScript has 7 primitive data types.

// 1.Number - Represents numeric values (integer, float, NaN, Infinity).

let age = 25;        // integer
let price = 99.99;   // decimal
let temp = -5;       // negative number

// 2.String - Represents text (characters inside quotes).

let name = "Ashutosh";
let city = 'Delhi';

// 3.Boolean - Represents logical values → true or false.

let isLoggedIn = true;
let hasPermission = false;

// 4.Undefined - A variable that is declared but not assigned a value.

let x;
console.log(x); // undefined

// 5. Null - Represents an intentional empty value.

let data = null;

// 6.Symbol (ES6) - Represents a unique and immutable identifier.

let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(id1 === id2); // false

// 7.BigInt (ES2020) - Represents very large integers beyond the limit of Number.

let bigNumber = 123456789012345678901234567890n;