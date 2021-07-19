/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

// a function for each operation 


function calculator() {
    let input = process.argv;
    let command = input[2];
    let output = 0;
    let numbersArray = input.slice(3)
    if (!command){
        return "No operation provided..."
    }else if(command !== "plus" && command !== "minus"){
        return `Invalid operation: ${command}`
    }
    else if(!input[3]){
        return  "No numbers provided...";
    }
    else if (command === "plus"){
        for (let i = 0;i < numbersArray.length;i++){
            let numberString = numbersArray[i]
            let number = Number(numberString)
            output += number
        }
    }else if(command === "minus"){
        output = numbersArray[0]
        for (let i = 1;i < numbersArray.length;i++){
            let numberString = numbersArray[i]
        let number = Number(numberString)
        output -= number
        }
    }
    // else  {
    //  output = false;
    //   return "No numbers provided...";
    // }
return(output)
}

// Don't change anything below this line.
module.exports = calculator;
