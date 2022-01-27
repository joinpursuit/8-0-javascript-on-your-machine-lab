/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
//where is the array to loop through? do we use infinity/-infinity?
//we need to loop through the array of numbers
//we need to convert the array of strings to numbers
//then create an if statement to add the numbers
//then use the process.argv
//then create the error messages using what was provided below
//let operator = process.argv;
//let numArray =
//for(let i = 0; i <)
//arr = arr.map(Number) - map returns a new array
function calculator() {
  //input here represents the entire paramenters or arguments being passed in
  let input = process.argv;
  // operator represents plus or minus
  let operator = process.argv[2];

  //anything after index 2 will be the numbers in the array, we do not know how many number so we slice at index 3 to the end of the array.
  //After we got the array of strings then we map that array and convert each element to a number
  let numArray = input.slice(3).map(Number);
  let sum = 0;
  if (!operator) return "No operation provided...";
  if (numArray.length === 0) return "No numbers provided...";
  if (operator !== "plus" && operator !== "minus")
    return `Invalid operation: ${operator}`;
  if (operator === "plus") {
    for (let i = 0; i < numArray.length; i++) {
      sum += numArray[i];
    }
  } else {
    //0 - (-1) = 1 starting at 0 would switch the sign from negative to positive. Because we initalize sum from index 0 we had to start i at 1.
    sum = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
      sum -= numArray[i];
    }
  }
  return sum;
}

// Don't change anything below this line.
module.exports = calculator;
