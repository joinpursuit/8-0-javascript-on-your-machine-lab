/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //create variable set to first input
    let calculation = process.argv[2];
    let result = Number(process.argv[3]);
    //check if theres any errors
    if (calculation === undefined){
        //no operations error
        return "No operation provided..."
    } else if (calculation !== "plus" && calculation !== "minus"){
        //invalid operations error
        return `Invalid operation: ${calculation}`
    } else if (process.argv[3] === undefined){
        //no numbers error
        return "No numbers provided..."
    }
    //go through the input numbers
    for (i = 4; i < process.argv.length; i++){
        //convert the strings to numbers and set num variable equal to the value
        let num = Number(process.argv[i])
 
        //if calculations is plus, add all the numbers to result
        if (calculation === "plus"){
            result += num; 
        //if calculations is minus, subtract all the numbers from result    
        } else if (calculation === "minus"){
            result -= num; 
        }
    }
return result;
}

//ashley montague

// Don't change anything below this line.
module.exports = calculator;
