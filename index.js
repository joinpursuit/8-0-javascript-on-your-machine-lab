/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let operator = process.argv[2];
    let numbersArr = [];
    for (let i=3;i < process.argv.length; i++) {
        numbersArr.push(Number(process.argv[i]));
    }
    if (!operator) {
        return "No operation provided...";
    }
    else if (!numbersArr.length) {
        return "No numbers provided...";
    }
    else if (!(["plus","minus"].includes(operator)))  {
        return `Invalid operation: ${operator}`;
    }
    else {
        let result = 0;
        if (operator === "plus") {

           for (let elem of numbersArr) {
              result += elem;
            }
           return result;
        }
        else { 
            result = numbersArr[0];
            for (let i=1; i < numbersArr.length; i++) {
                result -= numbersArr[i];
            }
            return result;

        }
    }
}

// Don't change anything below this line.
module.exports = calculator;
