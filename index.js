/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. 
 * Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

//we know the index [2] of process.argv will always be, when working as intended, a PLUS or a MINUS .  If not we have to set if conditions for when it is not.
//we know arguments are passed as strings so we have to convert these into NUMBERS.  maybe we can use the method Number() to convert this string into a number
// we know we need to iterate from index 3 until the end of our array (argv.length) and perform plus or minus operations to these numbers.
//we know we have to RETURN the result of these operations.  
//When we are adding, order is not important but when we subtract order is very important.

function calculator() {
    if (!process.argv[2]){
    return "No operation provided..."
    } else if (!process.argv[3]){
    return "No numbers provided..."
    } else if (process.argv[2] === "plus"){
        let plusSum = 0
        for (let i = 3; i < process.argv.length; i++){
            plusSum += Number(process.argv[i]);
        }
        return plusSum
    } else if (process.argv[2] === "minus"){
        let minusSum = Number(process.argv[3])
        for (let j = 4; j < process.argv.length; j++){
            minusSum -= Number(process.argv[j]);
        }
        return minusSum
    } else {
        return `Invalid operation: ${process.argv[2]}`
    }
}
// questions, why when i put line 25 after line 12 -- it all fails?  how can I  make it so my code doesn't fail.


// Don't change anything below this line.
module.exports = calculator;
