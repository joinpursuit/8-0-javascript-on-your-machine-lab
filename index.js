//third element in argv in the array will be either plus or minus
//every element in argv afterwards will be a number

/*Examples
argvArray ['plus', "5", "10", "15", "16", "18"]
argVArray ['plus', '5', '10'] */

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done.
 * Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  //declare a constant variable and assign it a copy of the things we want from the process.argv array
  const mathArgs = process.argv.slice(2);
  //declare a constant variable called command and assign it MathArgs at index 0
  const command = mathArgs[0].toLowerCase();
  //declare a variable named resultOfSumOrDifference and assign it evaluated result of converting MathArgs at index 1 to a number to start off
  let resultOfSumOrDifference = Number(mathArgs[1]);
  //if command is the string value 'plus' and the array length is greater than 3
  if (command === "plus" && mathArgs.length > 3) {
    //iterate through mathArgs array and make initial value 2
    for (let i = 2; i < mathArgs.length; i++) {
      //convert current element to number, then add to resultOfSumOrDifference
      resultOfSumOrDifference += Number(mathArgs[i]);
    }
    //post-iteration return resultOfSumOrDifference
    return resultOfSumOrDifference;
    //otherwise if command is the string value 'minus' and the array length is greater than 3
  } else if (command === "minus" && mathArgs.length > 3) {
    //iterate through mathArgs array and make initial value 2
    for (let i = 2; i < mathArgs.length; i++) {
      //convert current element to number, then add to resultOfSumOrDifference
      resultOfSumOrDifference -= Number(mathArgs[i]);
    }
    //post-iteration return resultOfSumOrDifference
    return resultOfSumOrDifference;
    //otherwise
  } else {
    //if command is the string value 'plus'
    if (command === "plus") {
      //return resultOfSumOrDifference plus the evaluated result of converting MathArgs at index 2 to a number
      return resultOfSumOrDifference + Number(mathArgs[2]);
      //otherwise if command is string value 'minus'
    } else if (command === "minus") {
      //return resultOfSumOrDifference minus the evaluated result of converting MathArgs at index 2 to a number
      return resultOfSumOrDifference - Number(mathArgs[2]);
    }
  }
}

calculator();

// Don't change anything below this line.
module.exports = calculator;
