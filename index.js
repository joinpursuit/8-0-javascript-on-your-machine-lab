/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //console.log(process.argv);
    let operation = process.argv[2];
    let diffNum = process.argv.slice(3);
    let number = 0;
    if(!operation) {
        return ("No operation provided...")
    } else if(operation !== "plus" && operation !== "minus"){
        return (`Invalid operation: ${operation}`)
    } else if(!process.argv[3]){
        return ("No numbers provided...")
    } else if(operation === "plus") {
        for(let i = 0; i < diffNum.length; i++) {
        number += Number(diffNum[i])
            }
        }  else if(operation === "minus") {
            number = diffNum[0]
            for(let i = 1; i < diffNum.length; i++) {
            number -= Number(diffNum[i])
        }
    }
    return number;
}



// Don't change anything below this line.
module.exports = calculator;
