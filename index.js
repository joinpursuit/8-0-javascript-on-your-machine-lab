/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let array = process.argv.slice(2) //just to simplify the array being worked on
    let result = Number(array[1]); //anchor the first number for the minus and divide
    if (/\d/g.test(array[0]) || !array[0]){//found a function to check strings for a number with regex
        return 'No operation provided...'
    }else if (!array[1]){ //checks if first item after operator exists
        return 'No numbers provided...'
    }else if (array[0] === 'plus') { //check first word for the operation keywords
        for (let i =2; i< array.length; i++){ //i starts at 2 since result contains i=1
            result += Number(array[i])
        }
    }else if (array[0] === 'minus') {
        for (let i =2; i< array.length; i++){
            result -= Number(array[i])
        }
    }else if (array[0] === 'divide') {
        for (let i =2; i< array.length; i++){
            result /= Number(array[i])
        }
    }else {//for the unknown operators
        return `Invalid operation: ${array[0]}`
    }
    return result
}

console.log(calculator())
// Don't change anything below this line.
module.exports = calculator;