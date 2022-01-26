/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    // 1. Variable Declarations/Definitions
    // Declare a variable that allows the user to input a string 'plus' or 'minus' into the 2nd index of the process.argv array.
    const operation = process.argv[2];
    // Declare a variable 'num' to be the initial number in both addition and subtraction that will finally return the whole value.
    let num = Number(process.argv[3]);
    // Declare a variable that will be a string array of numbers input by the user. When you slice an array, you get a new array starting from the first index number and if you leave off the other numbers, you get to the end of the array no matter the size.
    let numbers = process.argv.slice(4);

    // 2. Error Handling
    // This check for the truthiness of 'operation', if none provided by the user, return appropriate string.
    if (!operation) {
        return 'No operation provided...';
    }
    // We can use the .length property on the numbers array and then check for the truthiness or falsiness if the array is empty, meaning that the user didn't put in any numbers.
    if (!numbers.length) {
        return 'No numbers provided...';
    }
    // Check to see if the user input a valid operation (i.e. 'plus' or 'minus')
    if (operation !== 'plus' && operation !== 'minus') {
        return `Invalid operation: ${operation}`;
    }

    // 3. Main Operations, adding and subtracting the inputted numbers from the user.

    // For ...of loop used on the array of numbers input by the user matching the chosen and valid operation (i.e. 'plus' or 'minus'). Also wrapping the stringified numbers with the Number object to convert them to number so that the stated arithmetic operation can be performed on them.
    for (let number of numbers) {
        if (operation === 'plus') {
            num += Number(number);
        } else {
            num -= Number(number);
        }
    }
    
    return num;
    
};

// Don't change anything below this line.
module.exports = calculator;
