const { TestWatcher } = require("jest")

/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {

    let command = process.argv[2]
    let stringOfNumbers = process.argv.slice(3)
    let number = 0
    
    if (!command) {
        return ("No operation provided...")

    } else if(command !== "plus" && command !== "minus"){
        return (`Invalid operation: ${command}`)

    } else if(!process.argv[3]){
        return ("No numbers provided...")
    
    }else if(command === "plus"){
        
        for(let i = 0; i < stringOfNumbers.length; i++) {
    
        number += Number(stringOfNumbers[i])
        }
    } else if(command === "minus"){

        number = stringOfNumbers[0]

        for(let i = 1; i < stringOfNumbers.length; i++){

        number -= Number(stringOfNumbers[i])  

        }     
 }
  
    return number
}
console.log (calculator()) 



// {
//     return 
// } {
//     return )
// } {
// return  
// }

// if  (command === "plus")
//     for(i = 0; i < stringOfNumbers.length; i++)
//         number += Number(stringOfNumbers)
//     return number; 
//   if (command === "minus")
//     for(i = 0; i < stringOfNumbers.length; i++)
//         number -= Number(stringOfNumbers) 
//     return number;
//   if (command !== "plus" || command !== "minus")
//     for(i = 0; i < stringOfNumbers.length; i++)
//     return (`Invalid operation: ${command}`) 
//      if (command === "minus" || command === "plus")
//         for(i = 0; i < stringOfNumbers.length; i++)
//             return ("No numbers provided...")
//     else 
//     return("No operation provided...")

// for(i = 0; i < numbers.length; i++);{
//     if  (command === "plus" + numbers){
//        return number += Number(numbers)}
// }   if (command === "minus" + numbers)
//   {    return number -= Number(numbers)
// }   if (command !== "plus" || command !== "minus"){
//       return (`Invalid operation: ${command}`) 
// } if (command === "minus" || command === "plus"){
//       return ("No numbers provided...")
// }  else {
//     return("No operation provided...")
// }


// // Don't change anything below this line.
module.exports = calculator;
