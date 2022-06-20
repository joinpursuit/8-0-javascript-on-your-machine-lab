/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const op = process.argv[2];
    if((op === "plus")||(op === "minus")){
        total = Number(process.argv[3]);
        for (let i = 4; i < process.argv.length; i++){
            let num = Number(process.argv[i]);
            //if(total && num) {
                if(op === "plus"){
                    total+=num;
                }
                else if(op === "minus"){
                    total-=num;
                }
            //}
            //else{
                
            //}
        }
        if (total || total === 0){
        return total;
        }
        else {
            return "No numbers provided..."
        }
   }
   else {
    if(op){
        return `Invalid operation: ${op}`
    }
    else{
    return `No operation provided...`;
    }
   }
}

// Don't change anything below this line.
module.exports = calculator;
