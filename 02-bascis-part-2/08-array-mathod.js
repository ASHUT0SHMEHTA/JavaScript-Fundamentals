// <!-- Bilkul 👍
// Chaliye basic array operations aur unke important methods ko simple explanation + example ke sath likhte hain.


// ---

// 🔹 1. Create an Array

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits); // ["apple", "banana", "mango"]


// ---

// 🔹 2. Access Elements

// console.log(fruits[0]); // apple
// console.log(fruits[2]); // mango


// ---

// 🔹 3. Add Elements

// push() → add at end

// unshift() → add at start


// fruits.push("orange");
// console.log(fruits); // ["apple", "banana", "mango", "orange"]

// fruits.unshift("kiwi");
// console.log(fruits); // ["kiwi", "apple", "banana", "mango", "orange"]


// ---

// 🔹 4. Remove Elements

// pop() → remove last

// shift() → remove first


// fruits.pop();
// console.log(fruits); // ["kiwi", "apple", "banana", "mango"]

// fruits.shift();
// console.log(fruits); // ["apple", "banana", "mango"]


// ---

// 🔹 5. Find Index

// indexOf() → element ka index

// includes() → check element present hai ya nahi


// console.log(fruits.indexOf("banana")); // 1
// console.log(fruits.includes("grape")); // false


// ---

// 🔹 6. Modify Elements

// fruits[1] = "grapes";
// console.log(fruits); // ["apple", "grapes", "mango"]


// ---

// 🔹 7. Slice & Splice

// slice(start, end) → copy part of array (original change nahi hota)

// splice(start, deleteCount, addItems) → remove/replace/add (original change hota hai)


// let sliced = fruits.slice(0, 2);
// console.log(sliced); // ["apple", "grapes"]

// fruits.splice(1, 1, "banana");
// console.log(fruits); // ["apple", "banana", "mango"]


// ---

// 🔹 8. Join & Split

// let joined = fruits.join(", ");
// console.log(joined); // "apple, banana, mango"


// ---

// 🔹 9. Length

// console.log(fruits.length); // 3


// ---

// 👉 Ye basic array operations interview aur practice ke liye important hote hain.


// ---

// Kya aap chahte ho main isko ek table format (method | use | example | output) me likh du taaki aur easy lage? -->