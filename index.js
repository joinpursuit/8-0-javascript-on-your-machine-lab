/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {

    console.log(process.argv[2])

    let operation = process.argv[2]

    let numbers = process.argv.slice(3)

    if(operation === undefined){

        return "No operation provided..."
    
    } if(operation !== "plus" || operation !== "minus"){

        return `Invalid operation: ${operation}`
    
    } if(numbers.length = 0){

        return "No numbers provided..."
   
    } if(operation === 'plus'){

        let sum = 0

        for(let i = 0; i < numbers.length; i++){

            sum += numbers[i]

        }

        return sum

    } else if(operation === "minus"){

        let sum = number[0]
       
        for(let i = 1; i < numbers.length; i++){

            sum -= numbers[i]   
        }


        return sum
    }

// Don't change anything below this line.
module.exports = calculator;
//
// 
//
// if(operation === undefined){
//   return "No operation provided..."
//} else if(operation !== "plus" || operation !== "minus"){

//   return `Invalid operation: modulo`
//}
//
// if(operation === "plus"){
//     
// 
//for(let i = 3; i < process.argv.length; i++){
//
//    number += +process.argv[i]
//    return number
//}
//
//
//
//} else if(operation === "minus"){
//
//  for(let i = 3; i < process.argv.length; i++){
//
//  number -= +process.argv[i]
//  return number
//
//} else {
//  return "No numbers provided..."
//}
//
//}
//
//
//
// process.argv[0] and process.argv[1] will not change
// process.argv[2] will be "plus" or "minus"
// process.argv[i] will be the number
// process.argv[2] = operation
//for(let i = 3; i < process.argv.length; i++)
// let number
