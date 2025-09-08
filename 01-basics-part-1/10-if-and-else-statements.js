// If–Else Statement

// if–else is a decision-making statement in JavaScript.

// It allows the program to choose one path or another based on a condition.

// The condition is always a boolean expression (something that results in either true or false).

// 2. Basic Syntax

if (condition) {
  // code runs if condition is true
} else {
  // code runs if condition is false
}

// 3. How it works (Step by Step)

// 1. The program checks the condition inside if.

// 2. If the condition is true → executes the code inside the if block.

// 3. If the condition is false → skips if block and executes the else block.

// 4. Example

let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// Output:
// You are eligible to vote.

// 5. Real-life Analogy

// Think of if–else like a traffic light system 🚦:

// If the light is green → cars move.

// Else (if not green → red or yellow) → cars stop.

// It’s a way of choosing actions based on a situation.

// ---

// 6. Another Example (with false condition)

// let temperature = 10;

// if (temperature > 20) {
//   console.log("It’s warm outside.");
// } else {
//   console.log("It’s cold outside.");
// }

// ✅ Output:

// It’s cold outside.
