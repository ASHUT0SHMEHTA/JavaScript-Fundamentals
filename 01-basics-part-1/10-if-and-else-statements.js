// Here is a detailed explanation of the JavaScript conditional statements if, else if, and else with examples in plain English:

// if Statement
// The if statement allows you to execute a block of code only if a specified condition is true.

// Syntax:

// js
// if (condition) {
//   // code to run if condition is true
// }
// Example:

// js
// let age = 20;
// if (age >= 18) {
//   console.log("You are an adult.");
// }
// // Output: You are an adult.
// Explanation: If the condition age >= 18 is true, the code inside the if block runs.

// else Statement
// The else statement specifies a block of code to run if the if condition is false.

// Syntax:

// js
// if (condition) {
//   // runs if true
// } else {
//   // runs if false
// }
// Example:

// js
// let age = 15;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
// // Output: You are a minor.
// Explanation: If the if condition is false, the else block code runs.

// else if Statement
// The else if statement lets you check multiple conditions sequentially. Use it to test additional conditions if the previous if or else if conditions were false.

// Syntax:

// js
// if (condition1) {
//   // runs if condition1 is true
// } else if (condition2) {
//   // runs if condition1 is false and condition2 is true
// } else {
//   // runs if all conditions are false
// }
// Example:

// js
// let temp = 25;
// if (temp > 30) {
//   console.log("It's hot outside.");
// } else if (temp > 20) {
//   console.log("It's warm outside.");
// } else {
//   console.log("It's cold outside.");
// }
// // Output: It's warm outside.
// Explanation: The first condition is false, so it checks the else if condition which is true, so that block runs.

// Summary Example combining all:
// js
// let score = 75;

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 60) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }
// // Output: Grade B
// This example checks the score and prints the appropriate grade by evaluating conditions in sequence.

// These conditional statements help control the flow of your program by running different code blocks based on different conditions .