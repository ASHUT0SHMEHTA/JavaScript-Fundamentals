// Boolean Logic – Definition

// Boolean logic is a branch of mathematics and computer science that deals with true and false values only. It helps us make decisions based on conditions, using logical reasoning.

// In programming, Boolean logic is used to control the flow of a program, make comparisons, or check conditions.

// Think of it like a light switch: it’s either ON (true) or OFF (false) — no in-between.

// Key Concepts

// 1. Boolean Values

// Only two possible values:

// true → something is correct/yes/on

// false → something is incorrect/no/off

// Example:

let isRaining = true;
let haveUmbrella = false;

// 2. Boolean Expressions

// A statement that evaluates to true or false.

// Example:

let age = 18;
let canVote = age >= 18; // true

// 3. Boolean Operators
// Boolean logic uses operators to combine or modify conditions:

// Operator Meaning Example

// && AND true && false → false

// ! NOT !true → false

// ---

// 🔹 How Operators Work

// 1. AND (&&)

// Returns true only if both conditions are true.

// Analogy: You can watch a movie only if you finish homework AND clean your room.

let homeworkDone = true;
let roomClean = false;
let canWatchMovie = homeworkDone && roomClean; // false

// 2. OR (||)

// Returns true if at least one condition is true.

// Analogy: You can go outside if it’s Saturday OR it’s a holiday.

let isSaturday = false;
let isHoliday = true;
let canGoOutside = isSaturday || isHoliday; // true

// 3. NOT (!)

// Reverses the value: true becomes false, false becomes true.

// Analogy: If the light is OFF, then NOT OFF means it’s ON.

let lightOn = false;
let lightOff = !lightOn; // true

// Real-life Analogy

// Imagine Boolean logic like a traffic system:

// Traffic light red = stop → false

// Traffic light green = go → true

// AND: You can go only if green AND pedestrian signal is walk

// OR: You can go if green OR no cars coming

// NOT: If signal is NOT red, then you can go

// This helps computers decide what to do based on multiple conditions.

// ---

// 🔹 Summary in Simple Points

// 1. Boolean logic is all about true or false.

// 2. It helps in decision-making in programming.

// 3. Main operators are:

// && → AND

// || → OR

// ! → NOT

// 4. You can combine conditions to control program behavior.

// 5. Real-life example: traffic signals, homework + chores, or weather decisions.

// ---

// If you want, I can make a small diagram showing AND, OR, NOT visually with a real-life example—it will make it super easy to remember.

// Do you want me to do that?

// Sure! Let’s put Boolean logic into a clear table format including the operators, their meaning, examples, and real-life analogies.

// ---

// 🔹 Boolean Logic Table

// Operator Meaning Boolean Example Result Real-life Analogy

// && AND – both conditions must be true true && false false You can watch a movie only if homework is done AND your room is clean
//    OR – at least one condition is true `true
// ! NOT – reverses the value !true false If the light is OFF, then NOT OFF means it’s ON
// true Boolean value – correct/yes/on N/A true Traffic light green = go
// false Boolean value – incorrect/no/off N/A false Traffic light red = stop

// ---

// 🔹 How It Works with a Small Scenario

// Imagine deciding whether to go out to play:

// let isWeekend = true;
// let isRaining = false;

// let canPlay = isWeekend && !isRaining; // true

// isWeekend = true ✅

// !isRaining = !false → true ✅

// AND (&&) → true && true = true → You can play!

// ---

// If you want, I can make a bigger truth table showing all combinations of AND, OR, and NOT for complete clarity—it’s perfect for notes.

// Do you want me to make that?
