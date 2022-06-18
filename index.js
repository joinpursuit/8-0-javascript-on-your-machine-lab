/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() { 
     
// let NewArray = []
// NewArray.push(operation3)
// process.argv[3]



if (process.argv[2] === undefined ){
    return "No operation provided..."}

if (process.argv[2]!=="minus" && process.argv[2]!=="plus"){
    return `Invalid operation: ${process.argv[2]}`
 }

    
         if (process.argv[3] === undefined ){
            return "No numbers provided...";}




//BELOW IS THE AREA WHERE SUM WILL BE CARRIED OUT
let sum = 0
if (process.argv[2] === "plus"){

            for (let i=3; i<= (process.argv).length-1; i++){

            
                     sum += Number(process.argv[i]);
                
            }return sum}
//ABOVE IS THE AREA WHERE SUM WILL BE CARRIED OUT
//BELOW IS THE SUBTRACTION AREA
    let difference = Number(process.argv[3])

if (process.argv[2] === "minus"){

if((process.argv).length ===5){
 difference -= Number(process.argv[4])
}

 if ((process.argv).length>5){
    for (let i=4; i<= (process.argv).length-1; i++){

    difference -= Number(process.argv[i]);
    }
}return difference
}
//ABOVE IS THE SUBTRACTION AREA
    }
    
    
clearImmediate
    console.log(process.argv)



// Don't change anything below this line.
module.exports = calculator;
