/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // Assigning the value of the second index of process.argv to the variable named operator
    let operator = process.argv[2];
    // Using an if statement to evaluate if the operator variable is equal to undefined
  if (operator === undefined) {
    // Returning the string "No operation provided..." if there is no value provided for the operator 
    return "No operation provided..."
  }
    // Using an if statement to evaluate if the operator variable is not equal to the string 'plus' and not equal to the string 'minus'
  if (operator !== 'plus' && operator !== 'minus') {
    // Returning a template literal with the string 'Invalid operation: ' and the operator variable inside of it 
    // if the operator variable is not equal to 'plus or 'minus' 
    return `Invalid operation: ${operator}` 
  }
    // Using an if statement to evaluate if the third index of process.argv is equal to undefined
  if (process.argv[3] === undefined) {
    // Returning the string "No numbers provided..." if the third index of process.argv is equal to undefined
    return "No numbers provided..."
  }
    // Using an if statement to evaluate if the operator variable is equal to the string 'plus' 
  if (operator === 'plus') {
    // Declaring a variable named sum and initializing it to the number value of 0
    let sum = 0;
    // Creating a for loop to run through the indices of the process.argv array 
    // starting at index 3
    for (let i = 3; i < process.argv.length; i++) {
      // Adding the value of each element in the process.argv array (starting at index 3) to the variable sum
        sum += Number(process.argv[i]);
    }
    // Returning the sum variable
    return sum
  }
  // Using an if statement to evaluate if the operator variable is equal to the string 'minus
  if (operator === 'minus') {
    // Declaring a variable names sum and intializing it to the number value of the third index in the
    // process.argv array
    let sum = process.argv[3];
    // Creating a for loop to run through the indices of the process.argv array (staring at index 4)
    for (let i = 4; i < process.argv.length; i++) {
      // Subtracting the value of each element in the process.argv array (starting at index 4) and storing the value 
      // in the variable sum
        sum -= process.argv[i];
    }
    // Returning the variable sum
    return sum
  }
}

// Don't change anything below this line.
module.exports = calculator;
