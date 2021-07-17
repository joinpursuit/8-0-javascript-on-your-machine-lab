/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //plus = operator [index 2]
    const operator = process.argv[2]
    //inputs is index 3 and beyond
    const inputs = process.argv.slice(3)
    //.slice from index 3 to retrieve everything after index 3 to create new array
    let number = 0
    //these set up the loop

     if (!operator){
       
        return "No operation provided...";
    // needs to check for no numbers before checking for plus or minus operator

     } else if (!process.argv[3]){

        return "No numbers provided...";

     } else if (operator !== 'plus' && operator !== 'minus'){
     return `Invalid operation: ${operator}`;

    } else if (operator === 'plus'){
         //start of array //condition //increment
        for (let i = 0; i < inputs.length; i++){
            number += Number(inputs[i])}
            //number += Number("1") ..still a string
            //0 += 1 ..performs operation
            //number += Number(inputs[1])
            // 1 += 2
            //number += Number(inputs[2])
            // 3 += 3
            //number = 6

     } else if (operator === 'minus'){
        number = inputs[0]
        for (let i = 1; i < inputs.length; i++){
           
            number -= Number(inputs[i])
            //10 -= 5 ..10 - 5
        }
    }   
    
    return number
}

console.log(calculator())


// Don't change anything below this line.
module.exports = calculator;
