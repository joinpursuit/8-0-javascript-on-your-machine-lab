/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let x, sum = 0;
    x = process.argv[2];
    if(!x){
        return `No operation provided...`;
    }
    if(!(x === "plus" || x === "minus")){
        return `Invalid operation: ${process.argv[2]}`;
    }
    if(process.argv.length < 4){
        return `No numbers provided...`;
    }

    let temp=0; 
    sum = Number(process.argv[3]);//first number

    for(let i=4; i< process.argv.length; i++){
        temp= Number(process.argv[i]);
        if(x === "plus"){
            sum += temp;
        } else if (x === "minus"){
            sum -= temp;
        }
    }
    return sum;


}

// Don't change anything below this line.
module.exports = calculator;
