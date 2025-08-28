// Great 👍 chalo Arrow Function ko simple aur clear tarike se samajhte hain.


// ---

// 🔹 What is an Arrow Function?

// JavaScript me ES6 (2015) se introduce hua.

// Yeh ek short syntax hai functions likhne ka.

// Mostly function expressions ko chhota likhne ke liye use hota hai.

// Isme function keyword ki jagah => (arrow) use hota hai.



// ---

// 🔹 Syntax

// // Normal function expression
// const greet = function(name) {
//   return Hello, ${name}!;
// };

// // Arrow function
// const greet = (name) => {
//   return Hello, ${name}!;
// };


// ---

// 🔹 Examples

// 1. Single Parameter, Single Line Return

// const square = num => num * num;

// console.log(square(5));  // Output: 25

// 👉 Agar ek hi parameter ho to () optional hai.
// 👉 Agar ek hi line return hai to {} aur return likhna zaroori nahi.


// ---

// 2. Multiple Parameters

// const add = (a, b) => a + b;

// console.log(add(5, 7));  // Output: 12


// ---

// 3. Multi-line Body

// const multiply = (a, b) => {
//   const result = a * b;
//   return result;
// };

// console.log(multiply(4, 3));  // Output: 12


// ---

// 🔑 Important Difference

// Arrow functions me this ka behavior normal functions se alag hota hai (arrow function apna this nahi banata, balki parent ka use karta hai).

// Ye mostly callbacks, array methods (map, filter, reduce), aur concise code likhne ke liye use hote hain.



// ---

// 👉 Matlab simple shabdon me: Arrow Function = Short Cut way to write function expressions.


// ---

// Kya chaho ki main tumhe ek example dikhau jisme same code normal function expression aur arrow function dono se likhe ho taaki compare kar pao?