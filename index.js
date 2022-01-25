/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
     let resultedNumber  = 0
    if (process.argv[2]=== undefined){
        return `No operation provided...`
    } else if 
    ((process.argv[2] !== "plus") &&(process.argv[2] !== "minus")){
return `Invalid operation: ${process.argv[2]}`

    } else if (process.argv[3]=== undefined ){
        return `No numbers provided...`
    }
    // process.argv[2]=== "plus"? x = "plus": x = "minus";
    
   if (process.argv[2] === "plus") { 
       for (let i=3; i< process.argv.length; i++){
       
       
resultedNumber += Number(process.argv[i]);
} 
   return resultedNumber 
   
     
} else if (process.argv[2]=== "minus"){
    resultedNumber = process.argv[3] 
    let count = 0 
    for (let i =4; i < process.argv.length;i++){
        count += Number(process.argv[i]);
       console.log(count)
    }
    return resultedNumber - count ;
} console.log(resultedNumber)
//starting from [3] and subtracting from the number//
}
// Don't change anything below this line.
module.exports = calculator;
