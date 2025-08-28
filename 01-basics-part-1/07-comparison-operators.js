// Sahi bola bhai 👍 abhi tak humne Arithmetic + Assignment + Precedence dekhe,
// ab saath hi Comparison Operators bhi include kar lete hain, kyunki ye bhi interview aur coding point of view se important hote hain.


// ---

// 🔍 Comparison Operators in JavaScript

// Comparison operators values compare karte hain aur hamesha true ya false (boolean) return karte hain.


// ---

// 1. Equal (==)

// Check karta hai dono values equal hain ya nahi (type convert kar deta hai).

// console.log(5 == "5");   // true  (value same, type ignore)


// ---

// 2. Strict Equal (===)

// Check karta hai value aur type dono equal hain ya nahi.

// console.log(5 === "5");  // false (number ≠ string)
// console.log(5 === 5);    // true


// ---

// 3. Not Equal (!=)

// Check karta hai values equal nahi hain (type ignore).

// console.log(10 != "10"); // false (value same)
// console.log(10 != 5);    // true


// ---

// 4. Strict Not Equal (!==)

// Check karta hai value aur type dono different hain.

// console.log(10 !== "10"); // true (number ≠ string)
// console.log(10 !== 10);   // false


// ---

// 5. Greater Than (>)

// console.log(15 > 10); // true


// ---

// 6. Less Than (<)

// console.log(5 < 10); // true


// ---

// 7. Greater Than or Equal (>=)

// console.log(10 >= 10); // true
// console.log(15 >= 20); // false


// ---

// 8. Less Than or Equal (<=)

// console.log(10 <= 10); // true
// console.log(5 <= 3);   // false


// ---

// ✅ Summary Table

// Operator Example Meaning Result

// == 5 == "5" Equal (type convert) true
// === 5 === "5" Strict Equal (value + type) false
// != 10 != "10" Not Equal (type ignore) false
// !== 10 !== "10" Strict Not Equal true
// > 15 > 10 Greater Than true
// < 5 < 10 Less Than true
// >= 10 >= 10 Greater or Equal true
// <= 5 <= 3 Less or Equal false



// ---

// ⚡ Operator Precedence (with Comparison)

// JavaScript mein order hamesha:

// 1. () → Parentheses


// 2. ** → Exponentiation


// 3. * / % → Multiplication / Division / Modulus


// 4. + - → Addition / Subtraction


// 5. <, <=, >, >= → Comparison


// 6. ==, !=, ===, !== → Equality


// 7. = (assignment)




// ---

// Example (Mix of Arithmetic + Comparison):

// let result = 10 + 5 * 2 > 20;
// console.log(result);

// 👉 Step by step:

// 5 * 2 = 10

// 10 + 10 = 20

// 20 > 20 → false


// Output: false


// ---

// Bhai, chaho toh main ek final combined chart bana du jisme Arithmetic + Assignment + Comparison + Precedence sab ek jagah easy revision ke liye ho?