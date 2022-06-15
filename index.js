/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
if (!process.argv[2]){
    return "No operation provided..."
}
if (process.argv.length === 3){
    return "No numbers provided..."
} if (process.argv[2] === "plus"){

        let sum = 0
    
    for (let i = 3; i < process.argv.length; i++){
        // sum += Number(process.argv[i])
    sum += parseInt(process.argv[i])
    }
    return sum
    
     } 
     if (process.argv[2] === 'minus'){

        let diff = process.argv[3]
    for (let i = 4; i < process.argv.length; i++){
        // diff-= Number(process.argv[i])
    diff -= parseInt(process.argv[i])
    }
    return diff
     }
    
    if (process.argv[2] !== "plus" || process.argv[2] !== "minus"){
        return "Invalid operation: modulo"
        }
}
    //console.log(process.argv)

// Don't change anything below this line.
module.exports = calculator;
