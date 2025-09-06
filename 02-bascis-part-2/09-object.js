// Bilkul 👍 chaliye JavaScript Object ko simple tarike se samajhte hain:


// ---

// 🔹 What is an Object?

// Object ek collection of key–value pairs hota hai.

// Keys (properties) → string ya symbol hote hain

// Values → kuch bhi ho sakta hai (string, number, array, function, aur ek aur object bhi).



// ---

// 🔹 Basic Object Example

// // Object creation
// let person = {
//   name: "Ashutosh",
//   age: 24,
//   isStudent: true
// };

// console.log(person);

// ✅ Output:

// { name: "Ashutosh", age: 24, isStudent: true }


// ---

// 🔹 Accessing Properties

// 2 ways hote hain:

// console.log(person.name);     // "Ashutosh" (dot notation)
// console.log(person["age"]);   // 24 (bracket notation)


// ---

// 🔹 Updating & Adding Properties

// person.age = 25;  // update
// person.city = "Delhi"; // add new property
// console.log(person);

// ✅ Output:

// { name: "Ashutosh", age: 25, isStudent: true, city: "Delhi" }


// ---

// 🔹 Deleting Property

// delete person.isStudent;
// console.log(person);

// ✅ Output:

// { name: "Ashutosh", age: 25, city: "Delhi" }


// ---

// 🔹 Object with Function (Method)

// let car = {
//   brand: "Tesla",
//   speed: 120,
//   drive: function() {
//     return Driving at ${this.speed} km/h;
//   }
// };

// console.log(car.drive());
// // "Driving at 120 km/h"


// ---

// 👉 Summary:

// Object = collection of properties (key: value).

// Properties ko dot (.) ya bracket ([]) se access karte hain.

// Function agar object ke andar ho → usse method bolte hain.



// ---

// Kya aap chahte ho main Array vs Object ka short comparison bhi bana kar du, taaki aur clear ho jaye?