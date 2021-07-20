/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
        let inputArr = process.argv;
        let operation = inputArr[2];
        let numbers = inputArr.slice(3)
        console.log(numbers);
      
        if(!operation){
            return("No operation provided...")
        } else if(operation === 'plus' || operation == 'minus' && !numbers){
            return ('No numbers provided...')
        } else if (operation === 'modulo'){
            return ('Invalid operation: modulo');
        } else if (operation === "add"){
            var sum = 0;
            for (i = 3; i < process.argv.length; i++) {
            sum += Number(process.argv[i]);
            }
            console.log(sum);
        } else if (operation === "minus"){
             var sum = 0;
             for (i = 3; i < process.argv.length; i++) {
             sum -= Number(process.argv[i]);
            }
            console.log(sum);
        }
     }
     
     

// Don't change anything below this line.
module.exports = calculator;
