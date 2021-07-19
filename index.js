/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    console.log(process.argv)
    let operator = process.argv[2] //should be minus or plus
    let numArray = (process.argv.slice(3)) //number index in array//
    let result = Number(numArray[0]) //index that comes after the operator, used Number to convert to number from string//
//starting number is at numArray[0]//

if (!operator){ //if operator = false//˚˚
    return "No operation provided...";
}

else if (!process.argv[3]){ //new array that cuts starting at index 3//
    return "No numbers provided..."
}

else if(operator !== "plus" && operator !== "minus"){ //if operator is not plus or minus//
    return `Invalid operation: ${operator}`; //prints out whatever user typed as operator
}
else if(operator === "plus") {
    for (let i = 1; i < numArray.length; i++) // i = 1 because first number is already defined at line 11//
    result += Number(numArray[i]); 
}
else if(operator === "minus") {
    for (let i = 1; i < numArray.length; i++)   
    result -= Number(numArray[i])
console.log(result); //logs result to the console
}
return result; //return goes after the code blocks
}

calculator();
console.log()
   


// Don't change anything below this line.
module.exports = calculator;
