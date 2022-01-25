/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the 
 * kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from 
 * left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, 
 * depending on the arguments added to the command line.
 */
function calculator(command, num1, num2) {
    console.log(process.argv);

    command = process.argv[2];
    let sum = 0;
    let diff = 0;

// if minus were gonna subtract
//if add. we add

// write code that will execute no matter how many numbers are input
//an array 
// include a loop? .length (process.argv)

    // if (command === 'plus') { 
    //     for (let i = 3; i < process.argv.length; i++) {
//             sum += Number(process.argv[i]);
//         }
//         return sum;
//     } else if (command === 'minus'){
//         for (let i = 4; i < process.argv.length; i++) {
//             diff -= Number(process.argv[i]);
//         }
//         return diff;
//     } else if (!command) {
//         return "No operation provided..."
//     } else if (!num1 && !num2) {
//         return "No numbers provided..."
//     } else if (command !== 'plus' && command !== 'minus'){
//         return `Invalid operation: ${command}`
//     }
// }

    if (command === 'plus') { 
    if (num1 && num2) {
        for (let i = 3; i < process.argv.length; i++) {
            sum += Number(process.argv[i]);
        }
        return sum;

    } else {
        return "No numbers provided..."
    }
    } else if (command === 'minus'){
        if (num1 && num2){
            for (let i = 4; i < process.argv.length; i++) {
                diff -= Number(process.argv[i]);
            }
            return diff;

        } else {
            return "No numbers provided..."
     }  
    } else if (!command && !num1 && !num2) {
        return "No operation provided..."    
    } else if (command !== 'plus' && command !== 'minus'){
        return `Invalid operation: ${command}`
    }
}

// Don't change anything below this line.
module.exports = calculator;
