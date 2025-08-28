// Perfect 👌 let’s go step by step.


// ---

// 🔹 What is a Switch Statement?

// A switch statement is used when you have multiple conditions to check.
// Instead of writing many if...else if...else, you can use switch to make code clean and readable.


// ---

// 🔹 Syntax

// switch (expression) {
//   case value1:
//     // code if expression === value1
//     break;

//   case value2:
//     // code if expression === value2
//     break;

//   default:
//     // code if no case matches
// }


// ---

// 🔹 Example

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//   case 4:
//     console.log("Thursday");
//     break;

//   case 5:
//     console.log("Friday");
//     break;

//   case 6:
//     console.log("Saturday");
//     break;

//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Invalid day number");
// }

// 👉 Since day = 3, output will be:
// Wednesday


// ---

// 🔹 Key Points

// switch compares using strict equality (===).

// break stops the code from running into the next case (without break, it continues).

// default is optional (runs if no case matches).



// ---

// ⚡ If you want, I can also show you an example without break so you see how fall-through works. Want me to show that?