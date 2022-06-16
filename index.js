/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

 function calculator() {
    const op = process.argv[2] 
    if(!op) return 'No operation provided...' 
    if(op != 'plus' && op != 'minus') return `Invalid operation: ${op}`
    
    let nums = process.argv[3] ?  [...process.argv.slice(3)].map(Number) : false;
    if(!nums) return 'No numbers provided...'
    if(op == 'plus') return nums.reduce((a,b) => a+b) 
    else return nums.reduce((a,b)=> a-b)
}

// Don't change anything below this line.
module.exports = calculator;
