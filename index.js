/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator(command, num) {
    let result = ""
  if (num+ num){
  result = num+num
}else if (num - num){
    result = num - num
}else {result = "error"}
return result 
}

// Don't change anything below this line.
module.exports = calculator;
