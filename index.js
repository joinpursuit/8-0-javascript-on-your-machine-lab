/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let numbers = []
    if (!process.argv[2]) {
        return "No operation provided..."
    } else if (!process.argv[3]) {
        return "No numbers provided..."
    } else if (process.argv[2] !== 'plus' && process.argv[2] !== 'minus') {
        return `Invalid operation: ${process.argv[2]}`
    } else {
        for (let i = 3; i < process.argv.length; i++) {
            numbers.push(+process.argv[i])
        }
        if (process.argv[2] === 'plus') {
            numbers = numbers.reduce((current, next) => current + next)
        } else if (process.argv[2] === 'minus') {
            numbers = numbers.reduce((current, next) => current - next)
        }
        return numbers
    }
}
/*========================================OTHERWAYS OF SOLVING==========================================*/

    // if (!process.argv[2]) {
    //     return "No operation provided..."
    // } else if (!process.argv[3]) {
    //     return "No numbers provided..."
    // } else if (process.argv[2] !== 'plus' && process.argv[2] !== 'minus') { 
    //     return `Invalid operation: ${process.argv[2]}` 
    // } else if (process.argv[2] === 'plus') {
    //     for (let i = 3; i < process.argv.length; i++) {  //We start at 3 so that we skip the file paths and the operation
    //         //we need to turn the string
    //         total += ~~process.argv[i]
    //     }
    //     return total
    // } else if (process.argv[2] === 'minus') {
    //     total = parseInt(process.argv[3])
    //     for (let i = 4; i < process.argv.length; i++) {  //We start at 4 since we assigned total the value of the third index of process.argv
    //         total -= Number(process.argv[i])
    //     }
    //     return total
    // }
/*------------------------------------------------------------------------------------------------------*/
// let total = 0
// if( process.argv.length === 2 ){
//     return "No operation provided..."
// }else if(process.argv[2] !== 'plus' && process.argv[2]!=='minus'){
//     return 'Invalid operation: modulo'
// }else if(process.argv.length === 3 || process.argv[3]*1 ===NaN){
//     return 'No numbers provided...'
// }
// for (let i = 3; i < process.argv.length; i++) {
//     if (process.argv[2] === 'plus') {
//         total += +process.argv[i]
//     } else if (process.argv[2] === 'minus') {
//         if (i === 3) {
//             total = +process.argv[i]
//         } else total -= +process.argv[i]
//     }
// }
// return total

// Don't change anything below this line.
module.exports = calculator;

