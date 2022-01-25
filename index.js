/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let total = 0;
    if (!process.argv[2]){
       return "No operation provided...";
    }

    if (process.argv[2] === "plus"){
        if (!process.argv[3]){
           return 'No numbers provided...';
        }
        for (i = 3; i < process.argv.length; i++){
            //total = Math.floor(process.argv[i]);
            //console.log(process.argv.length);
            total = Math.floor(process.argv[i]) + total;
            //return total;
        }
        return total;
    } else if (process.argv[2] === "minus"){
        if (!process.argv[3]){
           return 'No numbers provided...';
        }
        total = Math.floor(process.argv[3]);
        for (i = 4; i < process.argv.length; i++){
            //console.log(total);
            total = total - (Math.floor(process.argv[i])) ;

        //console.log(total);
        }
        return total;
    }
      else
       //(process.argv[2] === typeof "string"){
         {return `Invalid operation: ${process.argv[2]}`;
     }
}

// Don't change anything below this line.
module.exports = calculator;
