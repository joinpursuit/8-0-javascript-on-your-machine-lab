/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let result = process.argv
    let command = process.argv[2]
if (command === undefined){
    result= "No operation provided..."
} else if (process.argv[3]=== undefined){
   result="No numbers provided..."
}else if (command!=="plus"&&command!=="minus"){
    result= "Invalid operation: modulo"
} else if (command==="plus"){
 let answer = 0
 for(let i=3; i<process.argv.length; i++){
    answer += Number(process.argv[i])
 } return answer
} else if (command==="minus"){
    let answer2 = Number(process.argv[3])
  for  (let j=4; j<process.argv.length; j++){
        answer2 -= Number(process.argv[j])
    }return answer2
 }return result

  
} 



// Don't change anything below this line.
module.exports = calculator;
