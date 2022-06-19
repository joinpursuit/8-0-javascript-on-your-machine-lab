/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus",
 *  which represents the kind of calculation that will be done.
 *  Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers
 *  or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or 
 * subtracting all numbers, depending on the arguments added to the command line.
 */



function calculator(){

let arr = process.argv;
let index2 = process.argv[2]

  

   if(index2 === 'plus'){
      addedNumbers = 0;
      if(!arr[3]   ||  !parseInt(arr[3]) ){
         return "No numbers provided..."
      }

      for (let i = 3; i < arr.length; i++){
         addedNumbers = addedNumbers + parseInt(arr[i])
      } 
      return addedNumbers
   }

   if(index2 === 'minus'){
      
      if(!arr[3]   ||  !parseInt(arr[3]) ){
         return "No numbers provided..."
      }
      let subtractedNumbers = parseInt(arr[3])
      for (let i = 4; i < arr.length; i++){
         subtractedNumbers = subtractedNumbers - parseInt(arr[i])
      } 
      return subtractedNumbers
   }


   if(!index2){
      return "No operation provided..."
   }

   if(index2 !== "plus"  ||  index2 !== "minus"){
      return "Invalid operation: modulo"
   }

}

//Don't change anything below this line.
 module.exports = calculator;


