/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
// plus 1 + 2 + 3 = 6        
// process.argv[2] + process.argv[3] + process.argv[4]
// count how many numbers there are
// process.argv.length - 2
// isolate the numbers from the worded arguments
// add them
// process.argv[3] + process.argv[4] + process.argv[5] + process.argv[6] + process.argv[ETC];
let solution = process.argv[3];

if(process.argv[2] === "plus") { 
            // Find starting point, how long you want to loop, keep track; "node run.js plus 1 2 3" Length of 6; 
            for(let i = 4; i < process.argv.length; i++) {
                solution = Number(solution) + Number(process.argv[i]);
            }
            return solution
        } else if (process.argv[2] === "minus") {
            for(let i = 4; i < process.argv.length; i++) {
                solution = Number(solution) - Number (process.argv[i]);
            }
            return solution
        } else {
            let opInQuestion = String(process.argv[2])
            let illegalOpMsg = "Illegal Operation: " + opInQuestion
            return illegalOpMsg
    }
}

// Don't change anything below this line.
module.exports = calculator;
