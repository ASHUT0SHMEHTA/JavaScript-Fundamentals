// Naming Conventions in Programming

// Naming conventions are rules or styles we follow when writing names (identifiers) in code. They make code easy to read, understand, and maintain.

// Think of it like different handwriting styles – everyone writes differently, but if you follow a neat, common style, everyone can read it easily.

// 1. camelCase

// In this style:

// The first word starts with a small letter.

// Every new word after that starts with a capital letter (no spaces, no underscores).

// Example in JavaScript:

let firstName = "Ashutosh";
let totalAmount = 2500;

function isUserLoggedIn(userName) {
  return userName === "Ashutosh";
}

// 2. PascalCase (like camelCase but starts with a capital letter)

// Each word starts with a capital letter.

// Example in JavaScript:

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

const myAccount = new BankAccount("Ashutosh", 5000);

// 3. snake_case

// Words are written in lowercase.
// Words are separated by underscores (_).

// Example in JavaScript:

let user_name = "ashutosh";
let total_amount = 2500;

function calculate_tax(amount) {
  return amount * 0.18;
}

console.log(calculate_tax(total_amount)); // 450

// 4. UPPERCASE (ALL CAPS)

// Every letter is in capital letters.
// Often combined with underscores for multi-word names.

// Example in JavaScript:

const PI = 3.14159;
const MAX_VALUE = 100;
const API_KEY = "XYZ123SECRET";

// 5. Using Dollar Sign $

// $ can be used in variable names in JavaScript.
// Often used in jQuery variables or special cases.

// Example in JavaScript:

let $price = 99;
let $user = { name: "Ashutosh", age: 23 };

// Example with jQuery (if available)

let $button = $("#submitBtn");

// 6. Using Underscores _ at Start or End

// Single underscore _var: often means “private” variable (not for direct use).

// Double underscore init: not in JS, but concept similar for special names.

// Trailing underscore class_: used when keyword already taken.

// Example in JavaScript:

let _hiddenValue = 42; // private-like variable

let class_ = "Science"; // because 'class' is a reserved keyword

// 7. Name + Number

// Variables/functions can include numbers (but not start with them).

// Example in JavaScript:

let version1 = "1.0.0";
let player2 = "Virat";
let itemCount3 = 15;

// Real-life analogy:

// Think of naming conventions like different ways of writing contact names in your phone:

// camelCase → myBestFriend

// PascalCase → MyBestFriend

// snake_case → my_best_friend

// UPPERCASE → MYBESTFRIEND

// With $ → $bestFriend (special)

// With underscore → _bestFriend (private note)

// With number → bestFriend1, bestFriend2
