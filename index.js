/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
//function calculator() {
     // the result be add and subtract all the numbers
    //Use "plus" and "minus" in code
    //the string has to return a number
    //the first two elements need to be removed
    //anything besides "plus" and "minus" should return "Invalid Operation: ..."
    //If no numbers are provided after the command, return "No numbers provided..."
    //If no command is provided, return "No operation provided..."

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
    
// Don't change anything below this line.
module.exports = calculator;
