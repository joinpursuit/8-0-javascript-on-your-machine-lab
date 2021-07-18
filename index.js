/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. 
 * Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // index                                   0                      1                      2       3        4            5
    // input: process.argv is an array ['string we don't want', 'string we don't want', 'string', 'num1', 'num2', ... 'num10']
    // output: evaluated result of sum or difference or a string depending on the arguement written in the terminal 

    // variables: operation, array of numbers, result of sum or difference
    // declare a const variable called operation and assign it a process.argv array at index 2 
    // declare a const varaiable called array of numbered strings and assign it process.argv at index 3 and on ['num1', 'num2', ... 'num10'] --> Read carefully
    // declare a variable called result of sum or difference and assign it the value 0

    const operation = process.argv[2];
    console.log(operation);
    const arrayOfNumeredStrings = process.argv.slice(3);
    console.log(arrayOfNumeredStrings);
    let resultOfSumOrDifference = Number(arrayOfNumeredStrings[0])
    // let resultOfSumOrDifference = 0;


    // edge cases: Invalid operation, No operation provided, No numbers provided
    // solution for edge case 1: if there is no operation return a string "No operation provided..."
    // solution for edge case 2: if operation is not strictly equal to plus AND minus then it returns a string "Invalid operation: OPERATION"
    // solution for edge case 3: if there is no numbers returns a string "No numbers provided..."
    
    if (operation === undefined) {
        return "No operation provided..."
    }
    if (operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`
    }
    if (arrayOfNumeredStrings.length === 0) {
        return "No numbers provided..."
    }
    // How do you say the array is empty?
    // ['8', '3'] -> 2
    // ['1'] -> 1
    // [] -> 0

    // problem 1: how will we handle more than one number and use our operation variable
    // solution: use the for loop 
    // if operation is strictly equal to plus 
        // iterate over numbered strings of array
           // the variable result of sum or differnce is added and reassigned to a string turned into a number --> Number()
    
    if (operation === 'plus') {
        for ( i = 1; i < arrayOfNumeredStrings.length; i++ ) {
            resultOfSumOrDifference += Number(arrayOfNumeredStrings[i])
        }
    }
// index  0    1    2     
//     ['9', '5', '1']
    // Otherwise if operation is stricly equal to minus 
        // iterate over numbered strings of array
           // the variable result of sum or differnce is added and reassigned to a string turned into a number  
    
    if (operation === 'minus') {
        for ( i = 1; i < arrayOfNumeredStrings.length; i++ ) {
            // resultOfSumOrDifference = arrayOfNumeredStrings[0] or process.argv[3]
            resultOfSumOrDifference -= Number(arrayOfNumeredStrings[i])
            // resultOfSumOrDifference = resultOfSumOrDifference - Number(arrayOfNumberedStrings)
            //   not reassign             =           9           -          1                      =     8       (loop)
            //   reassign                 =           9           -          5                      =     4       (loop)
    }
}

// let resultOfSumOrDifference = 0;
// index  0    1    2  
//     ['9', '5', '1']

    // return the result of sum or difference
    return resultOfSumOrDifference
    // console.log('Hi')
}

// console.log('Hi')
// let num = ('7')
// calculator()

// argv: [
//     '/usr/local/Cellar/node/16.5.0/bin/node',
//     '/Users/tashawneeguarriello/8.0/8-0-javascript-on-your-machine-lab/run.js'
//   ], 

/**
 * Argument: {node run.js operation num1 num2...} It is not the parameter in the function, it is what we write in the terminal
 * Output: {number or string} We will be returning not logging
 * Terms: process.argv is an array of string inside an object,  
 * 
 * Lets create viarables with the path to these values
 * We need convert strings "5" to numbers 5 --> Number("5")
 * We need to check if the operation is equal to "plus" or "minus" --> check proccess.argv[] 
 */
// Don't change anything below this line.
module.exports = calculator;
