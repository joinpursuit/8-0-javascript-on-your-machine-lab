/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. 
 * Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

// Taylor and Ki Sub

function calculator() {
    // Take arguments from the command line via the new variable input
    // the variable below is a local scope
    let input = process.argv; // create a new variable that holds values inside the argv array.
    const convertNum = input.slice(3); // access values that need to be calculated
    const newNum = convertNum.map((i) => Number(i)); // convert string value to number value before calculating 
           
    if (!input[2]) { // if no operations are provided, return an error message [dsdasdasd. dadadsad,]
        return "No operation provided...";
    }
    // process.argv ===> ['sdasdasdasdasd' , 'sdsaddfdsf' ' banana']
     if (input[2] !== 'plus' && input[2] !== 'minus') { // if the command/operation doesn't match plsu or minus, return an error message
        return `Invalid operation: ${input[2]}`;
    } 
    else {
        for (const i of newNum) // loop values in the array.  
        
        if (input[2] === 'plus') { // add up if plus was the operation
            const addUp = (accumulator, i) => accumulator + i; 
            
            return newNum.reduce(addUp) 
        
        }
        else if (input[2] === 'minus') { // substract if minus was the operation 
            const substract = (accumulator, i) => accumulator - i;
           
            return newNum.reduce(substract)
        }
    }
    return "No numbers provided..."; // if no numbers were provided, return an error message
 }
      // access to arguments after plus command line 'minus' => 5,10
            // convertNum = input.slice(3) ==> ["5", "10"]
            // const convertNum = input.slice(3);
            // convert those string values to numbers
            // const newNum = convertNum.map((i) => Number(i));
            // the variable newNum's evaluated value is now 5,10. [5,10,15,30]
            // add those number values in the array up
    
        // access to arguments after plus command line 'plus' => 5,10
            // convertNum = input.slice(3) ==> ["5", "10"]
            // convert those string values to numbers
            // the variable newNum's evaluated value is now 5,10. [5,10,15,30]
            // add those number values in the array up


// Don't change anything below this line.
module.exports = calculator;
