/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //returning a number

    let array = process.argv
     
     let result = 0
    
     //return an error message if no operation is provided
    if(array.length <= 2){
        return "No operation provided...";
    }

    //return an error message if no numbers are provided 
    if (array.length <= 3){
        return "No numbers provided..."
    }

   
    //plus     
    if (array[2] === "plus"){
        for (let i = 3; i < array.length; i++) {
            result += Number(array[i])
           
    }
    return result
}
    //minus
    if (array[2] === "minus"){
        number = array[3]
    for(let i = 4 ; i < array.length; i++){
           
            number -= Number(array[i])
        }
        return number
    }
   
     return `Invalid operation: ${array[2]}`

}


// Don't change anything below this line.
module.exports = calculator;



  