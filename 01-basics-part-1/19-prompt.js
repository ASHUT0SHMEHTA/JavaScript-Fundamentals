// Prompt -

// In programming, a prompt is a way to ask the user for input while a program is running. It’s like the program talking to the user and waiting for a response.

// In JavaScript, the prompt() function is used to display a dialog box that asks the user to enter some information.

// The input from the user is always returned as a string.

// Think of it like a questionnaire: the program asks a question, and the user types an answer.

// Key Points About Prompt -

// 1. Used to Get User Input

// The prompt() function allows the program to pause and wait for the user to type something.

// Example:

let name = prompt("Enter your name:");
console.log("Hello, " + name + "!"); // Output: Hello, name

// 2. Returns a Value

// Whatever the user types is returned by the prompt() function and can be stored in a variable.

// Example:

let age1 = prompt("Enter your age:");
console.log("You are " + age1 + " years old");

// 3. Optional Default Value

// You can provide a default value inside the prompt.

// Example:

let color = prompt("Enter your favorite color:", "Blue");
console.log(color);

// 4. Data Type

// Input is always a string.

// If you need a number, you should convert it using Number() or parseInt().

let age2 = Number(prompt("Enter your age:"));
console.log(age2 + 5); // now you can perform math

// Real-life Analogy

// Think of a prompt like a receptionist asking for your name at a hotel:

// Receptionist: “What’s your name?” → program asks question

// You type your name - user input

// Receptionist uses it - program stores and uses the input
