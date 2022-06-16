/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    let op = process.argv[2];
    let num = process.argv.slice(3);
    let sum = 0;
    let newNum = num.map(Number)
    console.log(newNum)

    if (!op){
        return "No operation provided..."
    }else if (!newNum.length){
        return "No numbers provided..."
    }else if (op === "plus"){
        for (let i = 0; i < newNum.length; i++){
            sum += newNum[i]
    }   return sum
    }else if(op === "minus"){
        sum += newNum.reduce((a,b) => a - b)
        return sum
    }
    else if(op !== "plus" || op !== "minus"){
        return `Invalid operation: ${op}`
    }
}
    



// Don't change anything below this line.
module.exports = calculator;


