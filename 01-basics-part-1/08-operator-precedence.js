// Operator Precedence

// Operator precedence means the priority order in which JavaScript executes operators in an expression.

// When you have multiple operators in the same line, JavaScript doesn’t always go left to right — it follows precedence rules.

// Example:

console.log(2 + 3 * 4);

// If JavaScript went left to right → (2 + 3) * 4 = 20

// But actually → 3 * 4 = 12, then 2 + 12 = 14

// Because * (multiplication) has higher precedence than + (addition).

// 2. Why it’s important?

// To avoid confusion in complex calculations.

// Helps us know which part of an expression runs first.

// Useful in math operations, conditions, and real-life decision-making.

// ---

// 3. Operator Precedence Table (Common Operators)

// Operator Precedence (High → Low) Example

// () (Parentheses) Highest (2 + 3) * 4 = 20
//  (Exponent) Next 2  3 = 8
// * / % (Multiply, Divide, Modulus) After exponent 10 / 2 * 3 = 15
// + - (Addition, Subtraction) After multiply/divide 10 - 3 + 2 = 9
// < > <= >= (Comparison) After arithmetic 5 > 3 = true
// == != === !== (Equality) After comparison 5 == "5" = true
// && (Logical AND) Lower true && false = false
//    (Logical OR)
// = (Assignment) Very Low x = 10

// ---

// 4. How to Control Precedence?

// Use parentheses () to force the order you want.
// 👉 JavaScript always executes parentheses first, no matter the rule.

// Example:

// console.log((2 + 3) * 4); // 20
// console.log(2 + 3 * 4);   // 14

// ---

// 5. Real-life Analogy

// Think of operator precedence like exam rules:

// In exams, final-year students get correction priority first, then third-year, then second-year, and lastly first-year.

// Similarly, in JavaScript, some operators (like * or /) get higher priority, while others (like + or ||) wait until their turn.

// If you want to change the priority, you can raise your hand (use parentheses) and get checked first.

// ---

// 6. Code Example

// let result = 10 + 2 * 3 ** 2;
// console.log(result);

// Step by step:

// 1. 3 ** 2 = 9 (exponent first)

// 2. 2 * 9 = 18 (multiply next)

// 3. 10 + 18 = 28 (addition last)

// ➡️ Output: 28 ✅

// ---

// ✅ In short:

// Operator precedence decides which operator runs first.

// Higher precedence = executes earlier.

// Use parentheses () to control the order and make expressions clearer.

// ---

// Do you want me to also make a *simple chart with only the most commonly used operators (like +, -, , /, %, &&, ||, ==, ===, etc.) for quick revision?
