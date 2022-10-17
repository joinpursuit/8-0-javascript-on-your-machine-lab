/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let input = process.argv[2]
    let inputLength = process.argv.length
    let endValue = 0
   
    if (inputLength === 2) {
        return "No operation provided..."
    }
    else if (input != "minus" && input != "plus") {
        return "Invalid operation: modulo"
    }
    else if (inputLength === 3){
        return "No numbers provided..."
    }

    for (let i = 3; i < inputLength; i++) {
        //console.log(process.argv[i]);
        if (input === "plus") {
            endValue += +process.argv[i]
        } else if (input === "minus") {
            if (i === 3) {
                endValue += +process.argv[i]
            } else {
                endValue -= +process.argv[i]
            }
        }

    }
    return endValue
}


console.log(calculator())



// Don't change anything below this line.
module.exports = calculator;
