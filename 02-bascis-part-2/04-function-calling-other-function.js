// Bahut badiya sawaal 👌 —


// ---

// 🔹 Function Calling Another Function

// 👉 JavaScript me ek function ke andar dusra function ko call kar sakte ho.
// 👉 Isse code modular (toda hua) aur reusable ban jaata hai.


// ---

// 🔹 Example 1: Simple Calculation

// // ek function jo number ka square banata hai
// function square(num) {
//   return num * num;
// }

// // ek function jo cube calculate karega, but square ko use karega
// function cube(num) {
//   return num * square(num); // yaha square() function call ho raha hai
// }

// console.log(cube(3));  // Output: 27

// ✔️ Yaha cube() function ke andar square() ko call kiya gaya hai.


// ---

// 🔹 Example 2: Juice Machine (fruitProcessor jaisa hi)

// // function jo fruits cut karega
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// // function jo juice banayega
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   return Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.;
// }

// console.log(fruitProcessor(2, 3));
// // Output: Juice with 8 pieces of apple and 12 pieces of orange.

// ✔️ Yaha fruitProcessor() ke andar cutFruitPieces() ko call kiya gaya hai.
// ✔️ Matlab ek function dusre ka result use kar raha hai.


// ---

// 🔑 Why use it?

// Code clean aur reusable ban jata hai.

// Har function ek chhota kaam karta hai.

// Bade programs ko chhote-chhote function mein tod ke likha jaata hai.



// ---

// 👉 Kya chaho main tumhe ek real-life practice idea du jisme tum khud ek function banake doosre ko call karke likh sako (jaise pizza maker, marks calculator, ticket system)?