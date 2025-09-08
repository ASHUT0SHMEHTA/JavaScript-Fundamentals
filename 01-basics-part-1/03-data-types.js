// Data Type in JavaScript

// A data type tells JavaScript what kind of value a variable holds. It helps JavaScript understand how to store, use, and operate on that value.

// Think of it like different containers in your kitchen:

// A bottle holds liquid,

// A jar holds solid,

// A basket holds fruits.

// Similarly, JavaScript has different types of data containers to hold different kinds of values.

// 1. Primitive Data Types

// Primitive types are basic types. They store single, simple values.

// a) Number

// Represents numeric values (integers or decimals).

// Example:

let age = 25;
let price = 199.99;

// Analogy: A measuring cup that holds a specific quantity of water or sugar.

// b) String

// Represents text enclosed in quotes ("", '', or ``).

// Example:

let name = "Ashutosh";
let city = "Mumbai";

// Analogy: A label or name tag – it stores letters, words, or sentences.

// c) Boolean

// Represents true or false values.

// Example:

let isLoggedIn = true;
let hasAccess = false;

// Analogy: A light switch – it can be ON (true) or OFF (false).

// d) Undefined

// When a variable is declared but no value is assigned, it is undefined.

// Example:

let score;
console.log(score); // undefined

// Analogy: An empty box that hasn’t been filled yet.

// e) Null

// Represents intentional “no value”.

// Example:

let selectedItem = null;

// Analogy: An empty chair reserved for someone – it’s empty on purpose.

// f) Symbol (ES6)

// Represents a unique identifier.

// Example:

let id = Symbol("id");

// Analogy: A unique ticket number – no two are the same.

// g) BigInt

// Represents very large integers that are bigger than Number can hold.

// Example:

let bigNumber = 123456789012345678901234567890n;

// Analogy: A giant safe that can store huge amounts of gold.

// 2. Non-Primitive Data Type

// These are objects. They can store collections of values and more complex data.

// a) Object

// A collection of key-value pairs.

// Example:

let person = {
  name: "Ashutosh",
  age: 20,
  city: "Delhi",
};

// Analogy: A real-life folder containing labeled papers – each key is a label, each value is the content.

// b) Array

// A type of object that stores ordered lists of values.

// Example:

let fruits = ["Apple", "Banana", "Mango"];

// Analogy: A fruit basket – each fruit is stored in order.

// c) Function

// A block of code that performs a task and can be reused.

// Example:

function greet(name) {
  return "Hello " + name;
}

// Analogy: A coffee machine – you press a button (call the function), and it makes coffee (returns a result).
