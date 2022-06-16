/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let operator = process.argv[2];
  let numbers = process.argv.slice(3);
  let sum = Number(numbers[0])
  if (!operator){
 return "No operation provided..."
} if (!numbers[0]){
 return "No numbers provided..." 
} if(operator !== 'plus' && operator !== "minus"){
 return `Invalid operation: ${operator}` 
}if(operator === "plus"){
for (let i = 1; i < numbers.length; i++) {
    sum += Number(numbers[i])
}   
 return sum     
}if(operator === "minus"){
    for (let i = 1; i < numbers.length; i++) {
     sum -= Number(numbers[i])
} return sum
}

}




// Don't change anything below this line.
module.exports = calculator;
