/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let args = process.argv.slice(2);
    let answer;
    if (args[0] === "plus"){
        if (args.length <= 1){
            return "No numbers provided..."
        }
        else{
            answer = parseInt(args[1]);
            for (let i = 2; i < args.length;i++){
                answer += parseInt(args[i]);
            }
            return answer;
        }
    }
    else if (args[0] === "minus"){
        if (args.length <= 1){
            return "No numbers provided..."
        }
        else{
            answer = parseInt(args[1]);
            for (let i = 2; i < args.length;i++){
                answer -= parseInt(args[i]);
            }
            return answer;
        }
    }
    else {
        console.log(isNaN(parseInt(args[0])));
        if (args[0]===undefined){
            return "No operation provided...";
        }
        else{
            return `Invalid operation: ${args[0]}`;
        }
    }

}

// Don't change anything below this line.
module.exports = calculator;
