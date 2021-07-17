/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents
 *  the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments
 *  added to the command line.
 */
 function calculator() {
 
    let slicArray = process.argv.slice(3);
    let outPut = 0;
  
    slicArray = slicArray.map(Number)

    if (!process.argv[2]) {

        return "No operation provided...";
   
   } else if(!slicArray.length){
return "No numbers provided...";

   }

   for (let i = 0; i < slicArray.length; i++) {

    if (process.argv[2] === 'modulo') {

        return "Invalid operation: modulo"
          
   } 
        //Adding multiple numbers (-+)
    else if (process.argv[2] === "plus" && slicArray.length) {
            
        //adds elements in the array slicArray (where a= acummulater=0 & b currentvalue)
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            outPut = slicArray.reduce(reducer)
                    
        }

        //Subtracting two/multiple numbers (-+)
    else if (process.argv[2] === "minus" && slicArray.length) {
        const reducer = (accumulator, currentValue) => accumulator - currentValue;
        outPut = slicArray.reduce(reducer)
        } 
    
     }
     
     return outPut;
    }
    
// Don't change anything below this line.
module.exports = calculator;
