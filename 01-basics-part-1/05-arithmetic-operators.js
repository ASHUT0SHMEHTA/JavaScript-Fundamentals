// Arithmetic Operators

// 1. Addition (+)

// Adds two numbers.

let apples = 10;
let moreApples = 5;

console.log(apples + moreApples); // 15

// Real-life analogy: If you have 10 apples and buy 5 more, you now have 15 apples.

// 2. Subtraction (-)

// Subtracts one number from another.

let money = 10;
let spent = 5;

console.log(money - spent); // 5

// Analogy: If you had ₹10 and spent ₹5, you are left with ₹5.

// 3. Multiplication (*)

// Multiplies two numbers.

let penCost = 10;
let quantity = 5;

console.log(penCost * quantity); // 50

// Analogy: If 1 pen costs ₹10, buying 5 pens costs ₹50.

// 4. Division (/)

// Divides one number by another.

let chocolates = 10;
let kids = 5;

console.log(chocolates / kids); // 2

// Analogy: If 10 chocolates are shared among 5 kids, each kid gets 2.

// 5. Remainer (%)

// Returns the remainder after division.

let mangoes = 10;
let friends = 3;

console.log(mangoes % friends); // 1 (because 10 ÷ 3 = 3 remainder 1)

// Analogy: If 10 mangoes are shared among 3 friends, each gets 3, and 1 mango remains.

// 6. Exponentiation (**)

// Raises a number to the power of another.

let base = 2;

let exponent = 3;

console.log(base ** exponent); // 8 (2 × 2 × 2)

console.log(3 ** 4);
// Expected output: 81

console.log(10 ** -2);
// Expected output: 0.01

console.log(2 ** (3 ** 2));
// Expected output: 512

console.log((2 ** 3) ** 2);
// Expected output: 64

// Analogy: 2³ = 2 × 2 × 2 = 8 (like compounding growth).

// 7. Increment (++)

// Increases a number by 1.

// Post-increment (num++) → uses the value first, then increases.

// Pre-increment (++num) → increases first, then uses the value.

let num = 5;

console.log(num++); // 5 (uses old value, then becomes 6)
console.log(num); // 6
console.log(++num); // 7 (increases first, then shows 7)

// 8. Decrement (--)

// Decreases a number by 1.

// Post-decrement (count--) → uses the value first, then decreases.

// Pre-decrement (--count) → decreases first, then uses the value.

let count1 = 3;
const count2 = count1--;

console.log(`count1:${count1}, count2:${count2}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"

// 9. Unary Negation (-)

// Changes the sign of a number.

const number = 4;
const negatedNumber = -number;

console.log(negatedNumber);
// Expected output: -4

const strValue = "4";
const negatedStrValue = -strValue;

console.log(negatedStrValue);
// Expected output: -4

// Analogy: If you owe ₹10 (debt), unary negation flips it to +₹10 (gain).

// Unary Plus (+)

// 👉 Converts a value into a number.

const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+"");
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+"hello");
// Expected output: NaN

// Analogy: Think of it as “forcing” something to be treated as a number.
