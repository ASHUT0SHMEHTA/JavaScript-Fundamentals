// 1.Lowercase single word

// Example:

let age = 25;
let city = "Delhi";

//Explanation:

// Simple lowercase words are usually used for short and temporary variables, but they are not very descriptive. Good for quick demos or throwaway code.

// Use it sometimes, but prefer more descriptive names.

// 2.camelCase (Most Common in JavaScript)

// Example:

let firstName = "John";
let currentTemperature = 32;

// Explanation:

// The first word starts with lowercase, each new word starts with uppercase.

// This is the standard convention in JavaScript for variables and functions.

function calculateTotalPrice() { }

// 3.snake_case (underscore naming)

// Example:

let user_name = "Alice";
let total_balance = 5000;

// Explanation:
// Uses underscores between words. Common in some other languages (Python, SQL), but not standard in JavaScript.

// Not recommended for JS, but valid.

// 4.Dollars & Underscore ($variable, _$hidden)

// Example:

let $element = document.querySelector("#id");
let _privateData = "hidden";

// Explanation:

// In JS, variables can start with $ or _.

// $ is often used in code related to jQuery or DOM elements.

// _ is commonly used for private or internal variables.

// Use these only when it adds meaning, not everywhere.

// 5.UPPERCASE (for constants or important fixed values)

// Example:

const PI = 3.14159;
const MAX_USERS = 100;

// Explanation:

// All capital letters with underscores between words. This signals that the variable is a constant and should never change.

// Use for numbers/values that must remain fixed.

// 6.Name + Number

// Example:

let option1 = "Red";
let option2 = "Blue";

// Explanation:

// Works, but not descriptive. Generally considered a bad practice, because variables should describe their purpose.

// Avoid if possible, and use arrays instead:

let options = ["Red", "Blue"];