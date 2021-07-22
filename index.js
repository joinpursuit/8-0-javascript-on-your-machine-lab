/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */



//understands the problem
//we're creating a function that works like a calculator
//function has no parameters
//Argument passed should be either "plus" or minus
//Instead we will use the process.argv
//We need to write "plus" or "Minus" in our terminal(command)in order for the numbers to be added

//Remember that the first and second elements of process.argv are always the path to the node program and the filepath.
//Remember that each argument from the command line will be read in as a string. You will need some way to convert the inputs from strings to numbers.
//Because you don't know how many numbers will be passed in, you may need to iterate over the numbers.



function calculator() {
    const operator = process.argv[2]
    const numArray = process.argv.slice(3)
    const num = numArray.map((element) => Number(element))
    
    if (!operator) {
        return "No operation provided...";
    };
    
    if (operator !== 'plus' && operator !== 'minus') {
        return `Invalid operation: ${operator}`;
    } else {
        for (let i of num) {
            if (!i) { 
            } else if (operator === 'plus') {
                const add = (accumulator, i) => accumulator + i;
                return num.reduce(add);
            } else if (operator === 'minus') {
                const subtract = (accumulator, i) => accumulator - i;
                return num.reduce(subtract);
                } else {
                return "No numbers provided..."
            }
        }
    }
}

// plus
// 4. should add up two numbers
// 5. should add up multiple numbers
// 6. should add negative numbers



// minus
// 7. should subtract two numbers
// 8. should subtract multiple numbers
// 9. should subtract negative numbers



// Don't change anything below this line.
module.exports = calculator;
