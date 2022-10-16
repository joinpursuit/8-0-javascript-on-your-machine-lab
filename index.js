/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
let input1 = process.argv
let operator = input1[2]
let sum1 = 0
// num2 = input1[3]



if (typeof(operator) != 'string'){
    sum1 = `No operation provided...`
} else if (process.argv.length < 4){
    sum1 = `No numbers provided...`
} else if ((operator !== "plus") && (operator !== "minus")){
    sum1 = `Invalid operation: ${operator}`
} else if (operator === "plus"){
    for (let i = 3; i < input1.length; i++){ 
    sum1 += Number(input1[i])   
    }
} else if (operator === "minus"){
    sum1 = input1[3]
    for (let i = 4; i < input1.length; i++){ 
    sum1 -= Number(input1[i])    
    }
} 



return sum1

}

// Don't change anything below this line.
module.exports = calculator;
