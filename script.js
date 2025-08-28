'strict mode'

// function teaProcessor(sugar, milk) {
//     console.log(sugar, milk);
//     const tea = `Tea with ${sugar} spoons sugar and ${milk} ml milk`;
//     return tea;
// }
// const tea = teaProcessor(1, 100)
// console.log(tea);


// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge(1991)
// console.log(age1)

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2)

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(2003, 'Ashu'));

const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const jucie = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return jucie;
}
console.log(fruitProcessor(2, 4));
