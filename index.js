/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a output.
 * Depending on the operation, either add up all of the numberString or subtract all of the numberString, from left to right.
 * @returns {output} The result of either adding all numberString or subtracting all numberString, depending on the arguments added to the command line.
 */

//establish variable for command
//establish variable for the numberString that will be used in our calc
//establish variable for our result and started it at 0
// create a for loop with i for the numberString written after the command
// search for command
//If command is plus then add all of the numberString together
function calculator() {
    let input = process.argv;
    let command = input[2];
    let output = 0;
    let numbersArray = input.slice(3)
    
    if (!command){
        
        return "No operation provided..."

    }else if(command !== "plus" && command !== "minus"){
        
        return `Invalid operation: ${command}`

    }
    else if(!input[3]){

        return  "No numbers provided...";
    
    }
    else if (command === "plus"){
        
        for (let i = 0;i < numbersArray.length;i++){
        
            let numberString = numbersArray[i]
     
            let number = Number(numberString)
            output += number  
        
        }
    }else if(command === "minus"){
        output = numbersArray[0]    
        
        for (let i = 1;i < numbersArray.length;i++){
            let numberString = numbersArray[i]
       
        let number = Number(numberString)
        
        output -= number 
        } 
    
    }
    // else  {

    //  output = false;
    //   return "No numbers provided...";
    // }

return(output)  
}


    
    

console.log(calculator())


// Don't change anything below this line.
module.exports = calculator;
