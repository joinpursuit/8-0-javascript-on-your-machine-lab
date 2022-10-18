/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let total = 0
if(process.argv.length === 2) { //if(!process.argv[2]) another way
    return  "No operation provided..."
    } else if (!process.argv[3]){
return  "No numbers provided..."
        } else if (process.argv[2] !== "plus"  && process.argv[2] !== "minus") { //use && to check that we don't have valid operations
            return `Invalid operation: ${process.argv[2]}` //error handling should always return what the user entererd
    }  else if (process.argv[2] === "plus"){
        for (let i = 3; i < process.argv.length; i++) {
            total += Number(process.argv[i]); // total += parseInt(process.argv[i]) 2) ~~(double tilde )
        } return total
    } else if (process.argv[2] === "minus") {
        total = Number(process.argv[3]) // we set total to [3] 
        for (let i = 4; i < process.argv.length; i++) { //start at 4 since we assigned total, the value of the third index of process
            total -= Number(process.argv[i]); // total += parseInt(process.argv[i]) 2) ~~(double tilde )
        } return total
    }
    

}

// Don't change anything below this line.
module.exports = calculator;
