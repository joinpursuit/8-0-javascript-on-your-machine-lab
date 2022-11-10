/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus",
 *  which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, 
 * depending on the arguments added to the command line.
 */
function calculator() {
    let number = 0

    if (process.argv[2] === "plus"){
        if (process.argv[3] === undefined) {
            return 'No numbers provided...'
        }
        for (let i = 3; i < process.argv.length; i++){
            number = parseInt(process.argv[i]) + number 
        }
    return number
    
   } else if (process.argv[2] === "minus"){
    if (process.argv[3] === undefined) {
        return 'No numbers provided...'
    }
    let number = process.argv[3]
        for (let i = 4; i < process.argv.length; i++){
            number = number - parseInt(process.argv[i]) 
        }
    return number 

   } else if (process.argv[2] === undefined){
    return "No operation provided..."

   } else
   return `Invalid operation: ${process.argv[2]}`
   
}

// node index.js minus  

module.exports = calculator;





