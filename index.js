/**
 * The function below has no parameters. Instead, access the arguments 
 * from the command line.
 * The first argument passed after the filename should be either
 *  "plus" or "minus", 
 * which represents the kind 
 * of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract 
 * all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting 
 * all numbers, depending on the arguments added to the command line.
 */
function calculator() {// return process.argv
    const operation = process.argv[2];  // program starts with index 2 because of the node & file location show up as index 0 & 1  Process.argv is the array itself. 
    const numberStrings = process.argv.slice(3);  //start at position 3 that comes after first argument that we 1st input (position 2)  //take all #s and put them into # strings
    // using map (unnecessary but... pretty?):
    // const numbers = numberStrings.map((string) => Number(string))
    const numbers = [];  // convert number stings from line 10 into actual numbers
    for (const string of numberStrings) {   
      numbers.push(Number(string));  // just to add something to end of array
    }
  
    if (!operation) {   // if there's no operation, does nothing
      return "No operation provided...";
    }
  
    if (!numbers.length) {  // if numbers.length is 0 (no #s) or doesnt exist
      return "No numbers provided...";
    }
  
    if (operation === "plus") {
      let sum = 0;
      for (const number of numbers) {
        sum += number;  // inside sum make it equal to sum + the #
      }
  
      return sum;
    }
  
    if (operation === "minus") {
      let answer = numbers[0];  // let answer be 1st #
      for (let i = 1; i < numbers.length; i++) {
        answer -= numbers[i];
      }
  
      return answer;
    }
  
    return `Invalid operation: ${operation}`;
  }
  // calculator()   //this is to call the calculator without the test
  
  console.log(calculator())


// Don't change anything below this line.
module.exports = calculator;
