// Ashu, [8/29/2025 9:08 AM]
// Bilkul 👍 chaliye Object dot notation aur bracket notation ko simple example ke sath samjhte hain:


// ---

// 🔹 1. Dot Notation (.)

// Sabse common tariqa hai.

// Sirf valid identifiers (jaise alphabets, numbers, _, $) wali keys ke liye kaam karta hai.

// Strings, spaces ya special characters wali keys ke liye nahi chalega.


// Example:

// let person = {
//   name: "Ashutosh",
//   age: 24,
//   city: "Delhi"
// };

// // Access with dot notation
// console.log(person.name);  // "Ashutosh"
// console.log(person.age);   // 24

// // Update with dot notation
// person.age = 25;
// console.log(person.age);   // 25


// ---

// 🔹 2. Bracket Notation ([])

// Zyada flexible hai.

// Jab key string, space, special character ya variable ke through aaye tab use karte hain.


// Example:

// let student = {
//   "first name": "Mehta",
//   class: 10,
//   roll_no: 42
// };

// // Access with bracket notation
// console.log(student["first name"]); // "Mehta"
// console.log(student["class"]);      // 10

// // Update with bracket notation
// student["roll_no"] = 50;
// console.log(student["roll_no"]);    // 50


// ---

// 🔹 3. Variable ke through Access

// Bracket notation ka ek bada benefit hai ki hum variable ka use kar sakte hain:

// let key = "city";
// let user = {
//   name: "Raj",
//   city: "Mumbai"
// };

// console.log(user[key]);   // "Mumbai"

// ❌ Ye dot notation me possible nahi hota:

// console.log(user.key); // undefined


// ---

// ✅ Summary:

// Dot Notation → Easy & clean, but only simple keys ke liye.

// Bracket Notation → Zyada flexible, variables, strings with spaces/special chars ke liye.



// ---

// 👉 Kya chahte ho main ek combined object example banaun jisme dot aur bracket notation dono use ho ek sath?

// Ashu, [8/29/2025 9:09 AM]
// Bilkul 👍 chaliye ek example banate hain jisme name key bhi ho, aur usko dot notation aur bracket notation dono se access/update karein:


// ---

// 🔹 Example with name key

// let person = {
//   name: "Ashutosh",
//   age: 24,
//   city: "Delhi",
//   "first name": "Mehta"   // space wali key
// };

// // ✅ Dot Notation (simple keys ke liye)
// console.log(person.name);   // "Ashutosh"
// console.log(person.age);    // 24
// console.log(person.city);   // "Delhi"

// // ✅ Bracket Notation (space wali keys ke liye)
// console.log(person["first name"]);  // "Mehta"

// // ✅ Update values
// person.name = "Raj";   // dot notation
// person["city"] = "Mumbai"; // bracket notation

// // ✅ Variable ke through access
// let key = "name";
// console.log(person[key]);   // "Raj"


// ---

// ⚡ Output:

// Ashutosh
// 24
// Delhi
// Mehta
// Raj


// ---

// 👉 Ab aap chaaho toh isme aur keys add karke dot + bracket dono use karke practice kar sakte ho.

// Kya main aapko ek mini-task du jisme aapko khud se person object update & access karna padega?