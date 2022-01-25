/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  // error handling test - process always returns an array of strings, meaning multiple words and sentences could essentially be within one string input. The first two inputs will always be 'node', which will return an absolute pathing for the file location in a string. The second is usually the name of the file you are noding, giving us another absolute pathing in the form of a string. This would mean any mathmatical processes would need to always take place on Index 2. For this if else statement, we set a boolean to the length of the amount of strings being equal to three to return an message for an inappropriate input. Mathmatical operations such as adding and dividing require two numbers. The else if covers if there is no entry at all provided at the third spot (and foreward), which would too make a mathmatical operation impossible in this instance.
  let result = 0;
  if (process.argv.length <3) {
      return 'No operation provided...'
  } else if (!process.argv[3]) {
return 'No numbers provided...'
}

//plus test - In order for or calculator to encompass all "real numbers" we must create a way for it to iterate through a count of any possible combination of number as long as it appears in the spot following a relevant index (not 0 or 1). If our mathmatical operation were to begin in the correct designated spot (index 2), index 3 must encompass a real number itself in order to run. Thus, we create a loop for this particular index (3) to be able to loop through any and all numbers that are less than the length of the entire array of the process. Our result gets an arithmetic operator to imply that whatever number is within that index should be added to the given number.
if (process.argv[2] === 'plus') {
    for (let i = 3; i < process.argv.length; i++) {
       result += Number(process.argv[i]) 
    }
return result    
}

//minus test- The aforementioned logic applies here, with a special twist. Javascript subtracts things from right to left. So in order to not get a negative number, one would have to keep in mind the value of the number they are placing in the corresponding index spot. The loop must still be able to add in order to encompass larger numbers and remove totals, but the result will ensure that the two numbers are subtracted from each other.
if (process.argv[2] === 'minus') {
result = process.argv[3]
    for (let i = 4; i < process.argv.length; i++) {
        result -= Number(process.argv[i]);
    }
    return result
}

//Invalid Operation: A simple else statement falls at the end of our function to ensure an output is given should an operation tried to be performed on the calculator that is outside its area of influence.
else {
    return `Invalid operation: ${process.argv[2]}`
}
}

calculator ();
// Don't change anything below this line.
module.exports = calculator;
