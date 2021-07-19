/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let inputArr = process.argv;
  let operation = inputArr[2];
  let numbers = inputArr.slice(3);
  let result = 0;
  
  if (!operation) {
    console.log("No operation provided...");
  } else if (!numbers) {
    console.log("No numbers provided...");
  } else if (operation === "plus") {
    for (let i = 0; i < numbers.length; i++) {
      result += parseInt(numbers[i]);
    }
  } else if (operation === "minus") {
    result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result -= parseInt(numbers[i]);
    }
  }
  console.log(result);
}

// Don't change anything below this line.
module.exports = calculator;
