const { run } = require("jest");

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator(x,y) {
   let  inputArr = process.argv;
   let operation = inputArr[2];
   let numbers = inputArr.slice(3)

   if(numbers === "divide" ){
      return "Invalid operation: divide";
   }else if (operation === "plus"){
      return numbers + numbers ;
   }else if (operation === ""){
      return "No numbers provided...";
   }else {
       return "No operation provided...";
   }
   
}



// Don't change anything below this line.
module.exports = calculator;
