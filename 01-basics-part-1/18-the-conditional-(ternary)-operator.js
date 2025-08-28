


// Nice one 👍 You’re asking about the Conditional Operator (also called Ternary Operator) in JavaScript.


// ---

// 🔹 What is it?

// The conditional (ternary) operator is a shortcut for if...else.
// It has three parts (that’s why it’s called ternary):

// condition ? expressionIfTrue : expressionIfFalse


// ---

// 🔹 Example 1: Basic

// let age = 20;

// let result = (age >= 18) ? "You are an adult" : "You are a minor";

// console.log(result);

// 👉 Since age >= 18 is true, output will be:
// You are an adult


// ---

// 🔹 Example 2: Without ternary

// let age = 20;
// let result;

// if (age >= 18) {
//   result = "You are an adult";
// } else {
//   result = "You are a minor";
// }

// 👉 Same as the ternary operator, but longer.


// ---

// 🔹 Example 3: Nested Ternary

// let marks = 85;

// let grade = (marks >= 90) ? "A"
//            : (marks >= 75) ? "B"
//            : (marks >= 50) ? "C"
//            : "F";

// console.log(grade);

// 👉 Here marks = 85, so output will be:
// B


// ---

// 🔹 Key Point

// Condition checked first

// If true → first expression runs

// If false → second expression runs



// ---

// ⚡ In short:
// condition ? doThisIfTrue : doThisIfFalse


// ---

// Do you want me to also compare ternary operator vs if-else statement in a table format so you can easily revise for interviews?