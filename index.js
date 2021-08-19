/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 function calculator() {
    let inputArr = process.argv;
    let operation = inputArr[2];
    let numbers = inputArr.slice(3);
    let noOperation = "No operation provided...";
    let sum= 0;
    let noNum = "No numbers provided..."
  
    if(!operation){
        return noOperation;
    }else if(!numbers.length){
        return noNum;
    }else if(operation !== "plus" && operation !== "minus"){
        return `Invalid operation: ${operation}`
    }
    if(operation === "plus"){
        for(let i = 0; i <numbers.length;i++){
            sum += parseInt(numbers[i]);
        }
    }
    if(operation === "minus"){
        for(let i = 0; i <numbers.length;i--){
            sum -= parseInt(numbers[i]);
        }
    }
        return sum;
  }  

// Don't change anything below this line.
module.exports = calculator;
