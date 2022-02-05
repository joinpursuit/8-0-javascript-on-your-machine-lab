/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

const { run } = require("jest");

function calculator() {
//let numbers = [0]
 //process.argv.push(numbers)
//  let num = 1
//  parseInt(process.argv[2])
// console.log(num + process.argv[2])
 
let result = 0 
let command = process.argv[2]
if(!command){
    return 'No operation provided...'
}else if(!process.argv[3]){
    return 'No numbers provided...'
}
if (command === 'plus'){
    for(i = 3; i< process.argv.length; i++){
        result += Number(process.argv[i])
    }
return result


  // ...really stuck with this one



}
}
// Don't change anything below this line.
module.exports = calculator;
