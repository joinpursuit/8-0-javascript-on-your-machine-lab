/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation
 *  that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the
 *  command line.
 */
function calculator() {
    {
        const command = process.argv[2];
        

         if (command === "plus") {
            let number = 0;
            let n = 3;
             
            for ( let n = 3; n <= parseFloat(process.argv.length-1) ; n++ ) {
                
               number = number + parseFloat(process.argv[n]);
             }
            return number;

        } else if  (command=== "minus") {
            let number = Number(process.argv[3]);
            let n = 3;

            for ( let n = 4; n <= Number(process.argv.length-1) ; n++) {
                number = number - Number(process.argv[n]);
            }
            return number;

        } else if (!(process.argv[2])) {
            return "No operation provided...";
        }  else if ( process.argv[2] !== (("plus") || ("minus")||(0) )) {
            return `Invalid operation: ${process.argv[2]}`;
        } else if ( !(process.argv[3]))  {
            return "No numbers provided...";
        }
    }
      
      const result = calculator (command, numbers)
      console.log(result);
}


// else if (process.argv[2] === (undefined) ) {
//     return "No operation provided...";
// }  else if ( process.argv[2] != (("plus") || ("minus") || (undefined) )) {
//     return `Invalid operation: ${process.argv[2]}`;
// } else if ( process.argv[3] === (undefined))  {
//     return "No numbers provided...";
// }

// Don't change anything below this line.
module.exports = calculator;
