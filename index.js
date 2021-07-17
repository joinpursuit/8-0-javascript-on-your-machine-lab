/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents
 *  the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments
 *  added to the command line.
 */
 function calculator() {

 //This slices part of array process.argv from index 3
    let slicArray = process.argv.slice(3);

    //Creating variable to return result in if statement
    let outPut = 0;
  
    //converts slicArray elements in string into number 
    slicArray = slicArray.map(Number)

    //checks if no input is provided
    if (!process.argv[2]) {

        return "No operation provided...";

   
   } 
   //checks if no number is provided
   else if(!slicArray.length){
        return "No numbers provided...";

   }

   //Iterates through the slicArray from process.argv array 
   for (let i = 0; i < slicArray.length; i++) {

    //checks if Input is 'modulo' and returns error message
    if (process.argv[2] === 'modulo') {

        return "Invalid operation: modulo"
          
   } 
       //Checks if  inputs are plus and a number  
    else if (process.argv[2] === "plus" && slicArray.length) {
            
        //adds elements in the array slicArray (-+)
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            outPut = slicArray.reduce(reducer)
                    
        }

     ////Checks if  inputs are minus and a number  
    else if (process.argv[2] === "minus" && slicArray.length) {
   
        //Subtracts elements  in the array slicArray (-+)
        const reducer = (accumulator, currentValue) => accumulator - currentValue;
        outPut = slicArray.reduce(reducer)
        } 
    
     }
     
     return outPut;
    }
    
// Don't change anything below this line.
module.exports = calculator;
