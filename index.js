/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
let operator = process.argv[2];
let numsArr = process.argv.slice(3).map(Number);
let sum = 0 ;    
console.log(numsArr);

if (!operator){
    return "No operation provided...";
} else if(!numsArr.length){
    return "No numbers provided...";
}  else {
    return "Invalid operation: modulo";
}
};




// Don't change anything below this line.
module.exports = calculator;

