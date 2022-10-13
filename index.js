/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    const operator = process.argv[2]
    let val = Number(process.argv[3])
    
    if (operator !== 'plus' && operator !== 'minus') { 
        if (!!Number(operator)/1 || !operator) { 
            return "No operation provided..."
        } else {
            return `Invalid operation: ${operator}`
        }
    } else if (!val) {
        return "No numbers provided..."
    }

    if (operator === 'plus') { 
        for (let i = 4; i < process.argv.length; i++) {
            let num = Number(process.argv[i])
            val += num
        }
    } else {
        for (let i = 4; i < process.argv.length; i++) {
            let num = Number(process.argv[i])
            val -= num
        }
    }
    return val
}

// Don't change anything below this line.
module.exports = calculator;
