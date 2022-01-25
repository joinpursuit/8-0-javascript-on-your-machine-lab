/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let symbol = process.argv[1];
    process.argv.shift();
    let numbers = process.argv;
    console.log(numbers);
if (symbol == '+'){
    //this will be the addition. there will need to be a loop
    console.log("I found an addition symbol");
} else if (symbol == '-'){
    //this will be subtraction. again, gonna need a loop.
    console.log("I found a subtraction symbol");
} else if (symbol != '+' || symbol != '-'){
    return "No operation provided..."
}

function addition(numbers){

}

function subtraction(numbers){

}

}



// Don't change anything below this line.
module.exports = calculator;