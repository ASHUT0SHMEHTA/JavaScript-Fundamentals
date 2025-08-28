// Bahut accha sawaal 👌. JavaScript mein function declare karne ke 2 common tareeke hote hain:


// ---

// 🔹 1. Function Declaration

// 👉 Isko hum normal way se likhte hain.
// 👉 Isme function ka naam fixed hota hai aur code ke start se hi use kar sakte ho (hoisting ke wajah se).

// Example:

// // function declaration
// function greet(name) {
//   return Hello, ${name}!;
// }

// // function ko call karna
// console.log(greet("Ashutosh"));  // Output: Hello, Ashutosh!

// ✔️ Isme function keyword ke saath direct function ka naam likha jata hai.
// ✔️ Yeh code ke kahin bhi likha ho, upar ya neeche, chal jaata hai (hoisting).


// ---

// 🔹 2. Function Expression

// 👉 Isme function ko ek variable ke andar store karte hain.
// 👉 Yeh hoisting nahi hota — matlab use karne se pehle declare karna hi padega.

// Example:

// // function expression
// const greet = function(name) {
//   return Hello, ${name}!;
// };

// // function ko call karna
// console.log(greet("Ashutosh"));  // Output: Hello, Ashutosh!

// ✔️ Isme function ka naam nahi hota (anonymous function), bas ek variable ke andar rakha hota hai.
// ✔️ Isko tabhi use kar sakte ho jab us line ke baad call karo.


// ---

// 🔑 Difference Summary

// Feature Function Declaration Function Expression

// Syntax function name() {} const x = function() {}
// Hoisting ✅ Hoisting hota hai (upar se call kar sakte) ❌ Hoisting nahi hota
// Name Always has a name Often anonymous (no name)
// Usage Traditional style Modern style, flexible (specially with arrow functions)



// ---

// 👉 Tum chaho to main tumhe ek combined example bana ke dikhau jisme dono ek hi file me ho aur output compare ho?