/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
     let result = 0;
     const noOpMsg = 'No operation provided...'
     const noNumMsg = 'No numbers provided...'
     const invOperator = `Invalid operation: ${process.argv[2]}`
    const operator = process.argv[2];
    // console.log(typeof process.argv[3])
     /** 
      * default length of process.argv is 2, test.js indicates
      * minimum length for a valid input would have to be 5.
      * first two elements[0][1], then plus/minus[2], then 2+ numbers[3][4]... 
      */
  
     //plus
     //if we are adding two numbers
     for (let i = 4; i < process.argv.length; i++) {
   if (process.argv.length >= 4 && operator ==='plus') {
         result = Number(process.argv[3]);
         result += Number(process.argv[i]);
       
     }
        return result;
 }
     //error handling
     if (!operator) {
         return noOpMsg;
     } //no operator ['path/to/node'[0], 'path/to/file'[1]] 
    
      if (!process.argv[3]) {
         return noNumMsg;
     } //no number(s) ['path/to/node'[0], 'path/to/file'[1]] 
    
    
      if (operator !== 'plus' || operator !== 'minus') {
         return invOperator;
     } // invalid operator... (passes test, not gonna change this anymore)
    
}
    //if we are adding more than two numbers
    



// Don't change anything below this line.
module.exports = calculator;
