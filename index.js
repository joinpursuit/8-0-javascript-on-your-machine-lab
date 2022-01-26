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
    let start = Number(process.argv[3]);
    
    if (isNaN(command)){
        if (command === 'plus') {
            for (let i = 4; i < process.argv.length ; i++) {
                start += Number(process.argv[i]);
            }
            return start; // works for adding two numbers w/ command = plus
        
        } else if (command === 'minus') {
            for (let i = 4; i < process.argv.length ; i++) {
                start -= Number(process.argv[i]);
            }
            return start; // works for subtracting any amount of #'s w/command = minus
            
        } else if (command === 'plus' || command === 'minus' && start === NaN){
            return "No numbers provided..." ;
        } else {
            return `Invalid operation: ${command}` ;
        }
        
    } else if (!isNaN(command)) {
        return "No operation provided..." ;
    }


    // if (command === 'plus') {
    //     for (let i = 4; i < process.argv.length ; i++) {
    //         start += Number(process.argv[i]);
    //     }
    //     return start; // works for adding two numbers w/ command = plus
    
    // } else if (command === 'minus') {
    //     for (let i = 4; i < process.argv.length ; i++) {
    //         start -= Number(process.argv[i]);
    //     }
    //     return start; // works for subtracting any amount of #'s w/command = minus
    
    // } else if (isNaN(command)) {
    //     if (command !== 'minus' && command !== 'plus') {
    //         return `Invalid operation: ${command}` ;
    //     } else if (!isNaN(command)) {
    //         return "No operation provided..." ;
    //     } else {}
    //     return "No numbers provided..." ;

        



}

// Don't change anything below this line.
module.exports = calculator;
