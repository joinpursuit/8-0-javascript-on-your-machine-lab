/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    const command = process.argv[2];
    const numbers = process.argv.slice(3).map(Number);
    if(!command){
      return "No operation provided..."
    }
    if(!numbers.length){
      return "No numbers provided..."
    }
     if(command !== "plus" && command !== "minus") {
      return `Invalid operation: ${command}`   
    } 
    if(command === "plus"){
      return numbers.reduce((a, b) => a + b)
    }
    if(command === "minus"){
      return numbers.reduce((a, b) => a - b)
    }
  }

// Don't change anything below this line.npm 
module.exports = calculator;
