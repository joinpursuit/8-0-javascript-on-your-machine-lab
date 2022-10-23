/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


function calculator() {
    let array = process.argv
    let result = 0;

     if (array.length < 3){
         return 'No operation provided...'
     }
     else if (!array[3]){
         return 'No numbers provided...'
     }
     if (array[2] === 'plus') {
         for (let i = 3; i < array.length; i++) {
             result += Number(array[i]);
         }
         return result
     }
     else if (array[2] === 'minus'){
         result = array[3]
            for (let i = 4; i < array.length; i++){
                result -= Number(array[i]);
            }
          return result
     }

    else {
        return `Invalid operation: ${array[2]}`;
        }
        

} 




















 // for(let i = 0; i <= process.argv.length; i++) {}
    //     let numbers = process.argv[i]
    //     let numbers = process.argv[i]
    //     let sum = Number(process.argv[3]) + Number(process.argv[4])
    //     let diff = Number(process.argv[3]) - Number(process.argv[4])

    //     if(process.argv[2] === undefined){
    //         return "No operation provided..."
    //     } else if(process.argv[3] === undefined){
    //         return "No numbers provided..."
    //     } else if(process.argv[2] !== 'plus' || process.argv[2] !== 'minus'){
    //         return "Invalid operation: modulo"
    //     } else if(numbers === 'plus'){
    //     let sum = Number(process.argv[3]) + Number(process.argv[4])

    //         return sum
    //     } else {
    //         return diff
    //     }
        
    // }



    

console.log(calculator())
// Don't change anything below this line.
module.exports = calculator;
