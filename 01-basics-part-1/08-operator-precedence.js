// Bahut sahi bhai 👌 ab main tumhe ek hi jagah pe sab kuch (Arithmetic + Assignment + Comparison + Operator Precedence) samjhata hoon, simple explanation + examples ke saath.


// ---

// 🔥 JavaScript Operators Full Guide


// ---

// 1. Arithmetic Operators

// Numbers ke upar calculation karte hain.

// Operator Meaning Example Result

// + Addition 10 + 5 15
// - Subtraction 10 - 5 5
// * Multiplication 10 * 5 50
// / Division 10 / 2 5
// % Modulus (Remainder) 10 % 3 1
//  Exponentiation 2  3 8
// ++ Increment x = 5; x++ → 6
// -- Decrement y = 5; y-- → 4



// ---

// 2. Assignment Operators

// Variable mein value assign/update karte hain.

// Operator Meaning Example Result

// = Assign value x = 10 10
// += Add & assign x = 5; x += 3 8
// -= Subtract & assign x = 5; x -= 2 3
// *= Multiply & assign x = 4; x *= 2 8
// /= Divide & assign x = 20; x /= 5 4
// %= Modulus & assign x = 10; x %= 3 1
// = Power & assign x = 2; x = 3 8



// ---

// 3. Comparison Operators

// Values compare karte hain → result true/false.

// Operator Meaning Example Result

// == Equal (type convert) 5 == "5" true
// === Strict Equal 5 === "5" false
// != Not Equal (type convert) 10 != "10" false
// !== Strict Not Equal 10 !== "10" true
// > Greater Than 15 > 10 true
// < Less Than 5 < 10 true
// >= Greater or Equal 10 >= 10 true
// <= Less or Equal 5 <= 3 false



// ---

// 4. Operator Precedence (Priority Order)

// JavaScript mein expression evaluate karte waqt priority is order mein hoti hai:

// 1. () → Parentheses


// 2. ** → Exponentiation


// 3. * / % → Multiply / Divide / Modulus


// 4. + - → Add / Subtract


// 5. < <= > >= → Relational (comparison)


// 6. == != === !== → Equality


// 7. = += -= *= … → Assignment




// ---

// ✅ Examples (Mix of All)

// Example 1 (Arithmetic + Comparison)

// let result = 10 + 5 * 2 > 20;
// console.log(result);

// 👉 5 * 2 = 10 → 10 + 10 = 20 → 20 > 20 → false


// ---

// Example 2 (Parentheses change result)

// let result = (10 + 5) * 2 > 20;
// console.log(result);

// 👉 (10 + 5) = 15 → 15 * 2 = 30 → 30 > 20 → true


// ---

// Example 3 (Assignment with Arithmetic)

// let x = 10;
// x += 5 * 2;   // x = 10 + (5*2)
// console.log(x);

// 👉 5 * 2 = 10 → x = 10 + 10 = 20
// Output: 20


// ---

// Example 4 (Strict Comparison)

// console.log(5 == "5");   // true
// console.log(5 === "5");  // false


// ---

// ⚡ Shortcut yaad rakho:
// 👉 Bracket → Power → Multiply/Divide → Add/Subtract → Comparison → Equality → Assignment


// ---

// Bhai, chaho toh main tumhe ek diagram / pyramid chart bana ke de du jisme ye sab operators ke level ek hi nazar mein samajh aa jaye. Bana du?