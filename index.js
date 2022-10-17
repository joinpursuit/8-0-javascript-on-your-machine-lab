/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let tString = process.argv[2];
    let sumV = 0;
    if (!tString) {
        return "No operation provided...";
    } else if (tString !== "plus" && tString !== "minus"){
        if (isNaN(parseInt(tString))){
            return `Invalid operation: ${process.argv[2]}`;
        }
        if (typeof parseInt(tString) === "number") {
            return "No hamster provided...";
        }
    } else if (!process.argv[3]) {
        return "No numbers provided..."
    } else if (tString === "plus") {
        for (let i = 3; i < process.argv.length; i++) {
            sumV += parseInt(process.argv[i]);
        }
        return sumV;
    } else if (tString === "minus") {
        sumV = process.argv[3];
        for (let i = 4; i < process.argv.length; i++) {
            sumV -= parseInt(process.argv[i]);
        }
        return sumV;
    } else {
        return `No hamster provided...`
    }
}

// Don't change anything below this line.
module.exports = calculator;
