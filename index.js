/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

let i;
let result = 0;
//const parameters = process.argv;
function calculator() {
  

// this "IF" is there is no parameters
 if (process.argv.length == 2 ) { 
     return "No operation provided..."
 }

 //
  if (process.argv[2] === "modulo"){
        
    return "Invalid operation: modulo"
 }

if (process.argv.length == 3) {
    if ((process.argv[2] === "plus") || (process.argv[2] === "minus")) {
       
        return "No numbers provided..."}
     
 }

 result = Number(process.argv[3]);
 for (i=4; i < process.argv.length; i++ ) {
    switch (process.argv[2]) {
        case "plus":
            result = result + Number(process.argv[i]); 
            break;
        case "minus":
            result = result - Number(process.argv[i]) ;
            break;
    }
 }
 return result   
}

calculator()


// Don't change anything below this line.
module.exports = calculator;
