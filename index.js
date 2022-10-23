/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

console.log(process.argv.length) //an array we can pass arguments into
function calculator() {
    let processArr = process.argv
    let sum;
   for(let i = 3; i < processArr.length; i++){
    if(processArr.includes('plus')){
        
    }
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
