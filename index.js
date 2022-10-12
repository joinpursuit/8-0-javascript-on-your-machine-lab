/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let command = process.argv[2];
    let args = process.argv.length;
    let sum = 0;
    //checking for errors;
    if(!command){
        return "No operation provided...";
    } 
    else if(command !== "plus" && command !== "minus"){
        return "Invalid operation: " + command;
    }
    else if(args < 4){
        return "No numbers provided...";
    }
    //checking command
    if(command === "plus"){
        for(let i = 3; i < args; i++){
            sum += Number(process.argv[i]);
        }
        return sum;
    }else if(command === "minus"){
       let difference = process.argv[3];
       for(let i = 4; i < args; i++){
            difference -= Number(process.argv[i]);
       } 
       return difference;
    } 
}
 

// Don't change anything below this line.
module.exports = calculator;
