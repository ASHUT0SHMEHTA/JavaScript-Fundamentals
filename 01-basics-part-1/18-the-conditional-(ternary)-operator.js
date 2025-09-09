// Conditional (Ternary) Operator –

// The conditional operator in programming is a short-hand way to write an if…else statement. It chooses one value or action based on a condition.

// It is called a ternary operator because it uses three parts:

// 1. A condition

// 2. A value if the condition is true

// 3. A value if the condition is false

// Think of it like a shortcut for making a simple decision.

// Syntax

// condition ? valueIfTrue : valueIfFalse;

// condition → something that evaluates to true or false

// valueIfTrue → what to do if the condition is true

// valueIfFalse → what to do if the condition is false

// Example

let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

// Output:

// Yes, can vote

// Explanation:

// age >= 18 → condition (true/false)

// "Yes, can vote" → value if true

// "No, cannot vote" → value if false

// Real-life Analogy

// Imagine you are deciding what to wear based on the weather:

// Condition: Is it raining?

// If true → wear a raincoat

// If false → wear sunglasses

// In ternary form:

let isRaining = true;
let outfit = isRaining ? "Raincoat" : "Sunglasses";

console.log(outfit); // Raincoat

// Key Points to Remember

// 1. Shortcut for if…else

// Saves lines of code when you have a simple decision.

// 2. Always has three parts

// Condition, value if true, value if false.

// 3. Returns a value

// Unlike if…else statements, the ternary operator produces a value, which can be stored in a variable.

// 4. Can be nested (with caution)

// You can use a ternary inside another ternary, but it can get hard to read.
