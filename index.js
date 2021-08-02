/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

//note: VS code has been funky for this file in particular, with tab indentation. This is what it gives me, which seems a bit too far. 
function calculator() {

    let finalCalculation = Number(process.argv[3]);
    let numberInput = process.argv.slice(4);
    let operationInput = process.argv[2];

    if(!operationInput){
        return "No operation provided...";
    }else if(Number.isNaN(finalCalculation)){
        return "No numbers provided...";
    }
    
    for(let i = 0; i < numberInput.length; i++){
        let currentIndex = Number(numberInput[i]); 
        if(operationInput === "plus"){
            finalCalculation += currentIndex;
        }else if(operationInput === "minus"){
            finalCalculation -= currentIndex;
        }else{
            return `Invalid operation: ${operationInput}`;
        }
    }
   

    return finalCalculation;


}

// Don't change anything below this line.
module.exports = calculator;
