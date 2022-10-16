/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let command = process.argv[2]
    const numbers = []
    let total = 0
    let count = 0

    // Edge cases that return errors when an invalid command is given
    if (command !== 'plus' && command !== 'minus') {
        if (command === undefined) {
            return 'No operation provided...'
        }
        return `Invalid operation: ${command}`
    }

    if (process.argv.length < 4) {
        return 'No numbers provided...'
       }

    // Adds to total if the operator is plus and subtracts from total
    // if the operator is minus. The total must be intitialized as the first
    // given argument to ensure it actually finds the difference of the numbers
    for (i = 3; i < process.argv.length; i++) {
        numbers.push(Number(process.argv[i]))
        if (command === 'plus') {
            total += numbers[count]
            count++
       } else if (command === 'minus') {
            if (count === 0) {
                total = numbers[0]
            } else
            total -= numbers[count]
            count++
       } 
    }
    return total
}
// Don't change anything below this line.
module.exports = calculator;
