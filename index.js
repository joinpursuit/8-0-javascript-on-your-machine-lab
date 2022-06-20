/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    function operationFunc(instruction,numArr)
    {
        let operator = {plus:"+",minus:"-",divide:"/",multiply:"*"};
        let total=NaN;
        for(let x of numArr)
        {
            //pull the first number
            if(!isNaN(x))
            {
                total=numArr.shift();
                break;
            }
            else// if x is not a number remove it
            {
                numArr.shift();
            }
        }
        //pull the rest
        for(let x of numArr)
        {
            if(!isNaN(x))
            {
                total=eval(`${total} ${operator[instruction]} ${x}`);
            }
        }
        return total;
    }
    let instruction = process.argv[2];
    let numArr = process.argv.slice(3);
    let result = 0;
    if(process.argv.length<3)
    {
        return "No operation provided...";
    }
    if(numArr.length===0)
    {
        return "No numbers provided...";
    }
    
    switch(instruction)
    {
        case "plus":case "minus":case "divide":case "multiply":
            //
            result = operationFunc(instruction,numArr);
        break;
        default:
            //
            result = `Invalid operation: ${instruction}`;
    }
    return result;
}

// Don't change anything below this line.
module.exports = calculator;
