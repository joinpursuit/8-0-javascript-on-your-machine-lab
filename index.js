/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


function calculator() { if(!command){
    return 'No operation provided...'
}else if(!process.argv[3]){
    return 'No numbers provided...'
}
if (command === 'plus'){
    for(i = 3; i< process.argv.length; i++){
        result += Number(process.argv[i])
    }
return result
}

    //should be able to subtract and add numbers 
    // all the arguments will be passed through the terminal when this file is 
    //so, we don't need function paramaters. 

    //goal: store the calculator command (plus or Minus) in variable 
        let command = process.argv[2]; 
        let nums = [];
        for (let i = 3; i < process.argv.length; i += 1) {
        }  nums.push (parseFloat(process.argv[i]));
        
}
    console.log ("nums is");

let nums= [];
//for (let i = 3; i < process.argv.length; i += 1) {
  }  

//console.log ("command is" , command);
if (!command) {
    return `Invalid operation: ${command}`;
}

if (!command){
    return "No operation provided...";
} else if (!process.argv[3]){
        return "No operation provided...";
        

}
if (command !== "plus" && command !== "minus") {

}else {
    return " I don't reconize that command";
}

//console.log (process.argv`);
// Don't change anything below this line.
module.exports = calculator;
