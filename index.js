/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
// CLEAN CODE:
function calculator() {
    // assigning the operation if there's any
    const command = process.argv[2];
    // assigning the first number if there's number
    const number = process.argv[3];
    //converting the String type of number to the Number type
    let result = Number(number);
    
    // if there's no operation
    if (command === undefined) {
        return "No operation provided...";
    // if there's no number
    } else if (number === undefined) {
        return "No numbers provided...";
    }
    // looping from second number,
    // because the first number is assigned to the variable result
    for (let i = 4; i < process.argv.length; i++) {
        if (command === 'plus') {
            // adding to the first number
            result += Number(process.argv[i]);
        } else if (command === 'minus') {
            // subtracting the first number
            result -= Number(process.argv[i]);
        } else {
            // if the operation is not plus or minus
            return `Invalid operation: ${command}`;
        }
    }
    // return the total value;
    return result;
}


// // MESSY CODE:
// let result = 0;
// function calculator() {
//     if (process.argv[2] === undefined) {
//        return "No operation provided...";
//     } else if (process.argv[3] === undefined) {
//        return "No numbers provided...";
//     } else {
//        let arr = [];
//        for (let i = 3; i < process.argv.length; i++) {
//            arr.push(parseInt(process.argv[i]));
//        }
//        for (let i = 0; i < arr.length; i++) {
//            if (process.argv[2] === 'plus') {
//                result = arr.reduce((a, b) => a + b);
//            } else if (process.argv[2] === 'minus') {
//                result = arr.reduce((a, b) => a - b);
//            } else {
//                return `Invalid operation: ${process.argv[2]}`;
//            }
//        }
//     }
//    return result;
// }


// Don't change anything below this line.
module.exports = calculator;
