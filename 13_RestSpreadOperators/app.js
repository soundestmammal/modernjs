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