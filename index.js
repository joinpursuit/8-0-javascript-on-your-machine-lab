/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


const input = process.argv[2] 
const totalArgs = []
let i = 3
function calculator(input,result) {
    do {
        totalArgs.push(process.argv[i])
        i++ ;
    } while (i >2 && i < totalArgs.length)
    if (input === 'plus') {
        for (let j = 0; j < totalArgs.length ; j++) {
            result += totalArgs[j];
            return result ;
        }
        
    } 
}

// Don't change anything below this line.
module.exports = calculator;
