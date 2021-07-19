/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
        let arg = process.argv
    let operator = arg[2] //should be minus or plus
    let numArray = process.argv.slice(3);
    let sum = 0;
     //10

        if (!operator){
        return "No operation provided...";
        }
        if (operator !== "plus" && operator !== "minus"){
        return "Invalid operation: modulo"
        }
         else {

        
    //['1','2','3','4'] //an array of strings
for (let i = 0; i < numArray.length; i++) //i = 1
       
         if (operator === "plus"){
           sum += Number(numArray[i]); //converted string to number
    } else if (operator === "minus"){
            //const subtract = (accumulator, i) => (accumulator - i)
            sum - Number(numArray[i]);
        } 
        }     
       return sum;
}


// Don't change anything below this line.
module.exports = calculator;
