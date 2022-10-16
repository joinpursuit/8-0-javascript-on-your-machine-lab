/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let total = 0
    if( process.argv.length === 2 ){
        return "No operation provided..."
    }else if(process.argv[2] !== 'plus' && process.argv[2]!=='minus'){
        return 'Invalid operation: modulo'
    }else if(process.argv.length === 3 || process.argv[3]*1 ===NaN){
        return 'No numbers provided...'
    }
    for (let i = 3; i < process.argv.length; i++) {
        if (process.argv[2] === 'plus') {
            total += +process.argv[i]
        } else if (process.argv[2] === 'minus') {
            if (i === 3) {
                total = +process.argv[i]
            } else total -= +process.argv[i]
        }
    }
    return total
}

// Don't change anything below this line.
module.exports = calculator;
