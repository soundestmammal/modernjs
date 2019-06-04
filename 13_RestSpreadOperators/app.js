/*
Rest and Spread Operators:

Syntactic Sugar
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];

function addNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(addNumbers(numbers)); // 55

// Sum a bunch of numbers NOT in an array


// Sum a list of unspecified length of numbers
// Rest Operator
function otherAddNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(otherAddNumbers(1,2,3,4,5));

// Spread Operator - Flatten or "Spread" them out.

// suppose we want to display a pallate of colors to the user

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

// A method available on every array
console.log(defaultColors.concat(userFavoriteColors));

// Achieve the same effect using the spread operator
console.log([...defaultColors, ...userFavoriteColors]);

// How is this different?
console.log([...defaultColors, userFavoriteColors]);
// This returns [ 'red', 'green', [ 'orange', 'yellow' ] ]

// What is a benefit of this feature?

const fallColors = ['fire red', 'fall orange'];
console.log(['green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ]);

// I can mix both the rest and the spread operators

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items ];
    }
    return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));

// What if I want to rename calculateProduct without creating breaking changes...

const MathLibrary = {
    calculateProduct(a,b) {
        return a * b;
    },
    multiply(a,b) {
        return a * b;
    }
};

