// Bahut badiya 👌 aap Object methods aur this ko ekdum clear samajhna chahte ho.
// Chaliye step by step samajhte hain:


// ---

// 🔹 Object Methods and this in JavaScript

// 1. Object Method kya hai?

// Jab object ke andar ek function hota hai, use method kehte hain.
// 👉 Matlab function ko object ki property banakar use karna.


// ---

// 2. this keyword kya karta hai?

// this current object ko refer karta hai jisme method likha hai.

// Matlab: jis object ne method call kiya, this usi ko point karega.



// ---

// 🔹 Example 1: Normal Method with this

// let person = {
//   name: "Ashu",
//   age: 23,
//   greet: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// person.greet();
// // Output: Hello, my name is Ashu

// 👉 Yaha this.name ka matlab hai person.name.


// ---

// 🔹 Example 2: Shorthand Method Syntax

// let person = {
//   name: "Mehta",
//   age: 24,
//   greet() {   // shorthand
//     console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
//   }
// };

// person.greet();
// // Output: Hi, I am Mehta and I am 24 years old.


// ---

// 🔹 Example 3: Arrow Function inside Object

// let person = {
//   name: "Ashu",
//   greet: () => {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet();
// // Output: Hello undefined

// 👉 Kyun?
// Arrow function ka apna this nahi hota, wo parent scope se leta hai (object nahi).
// Isliye object ke andar arrow function use karoge toh this kaam nahi karega.


// ---

// 🔹 Example 4: Object ke andar method dusre function ko call karna

// let calculator = {
//   num1: 10,
//   num2: 5,
//   add() {
//     return this.num1 + this.num2;
//   },
//   multiply() {
//     return this.num1 * this.num2;
//   }
// };

// console.log(calculator.add());      // 15
// console.log(calculator.multiply()); // 50

// 👉 Yaha this.num1 aur this.num2 object ke andar ki values ko access kar rahe hain.


// ---

// 🔑 Summary:

// 1. Method = object ke andar function


// 2. this = jis object ne method call kiya hai, usi ko refer karega


// 3. Function expression ✅, shorthand ✅


// 4. Arrow function ❌ (kyunki this nahi milega)




// ---

// 👉 Kya aap chahte ho main isko ek comparison table bana kar dikhaun (normal function vs shorthand vs arrow function with this), taaki aapko aur easy lage?