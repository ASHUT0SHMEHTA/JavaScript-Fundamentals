// String Template Literals (with Old vs New)

// 1. Old Way (before ES6)

// Example:

let personName = "Mehta";
let personAge = 22;

let oldMessage =
  "My name is " + personName + " and I am " + personAge + " years old.";
console.log(oldMessage);

// Multi-line old way
let oldText = "Line A\n" + "Line B\n" + "Line C";
console.log(oldText);

// 2. New Way (Template Literals in ES6)

// Example:

let userName = "Rohit";
let userAge = 25;

let newMessage = `My name is ${userName} and I am ${userAge} years old.`;
console.log(newMessage);

// Multi-line new way
let newText = `Line X
Line Y
Line Z`;
console.log(newText);

// 3. Expression Support (Only in Template Literals)

// Example:

let num1 = 15;
let num2 = 7;

console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)); // Old way
console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`); // New way
// 4. Comparison Table

// Feature Old Way (Quotes + +) Template Literals (Backticks)

// Syntax ' ' or " "   (backticks)
// Insert variables "Hello " + personName Hello ${userName}
// Multi-line strings Use \n or + Directly press Enter
// Expression evaluation Concatenate manually ${num1 + num2} inside string
// Readability Messy  Clean and simple

// Real-life Analogy

// Old way = puzzle with many small pieces (you keep joining strings with +).

// Template literal = ready-made sentence with blanks you just fill in.
