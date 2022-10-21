/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
//function calculator() {
//     let argvs = process.argv.slice(2)
//     if (argvs < 1 ){
//         return "No operation provided..."
//     }   else if (argvs[0] === "plus" || argvs[0] === "minus" && )
    
//     if (argvs[0] === "plus"){
//         return a + b
//     }   else if (argvs[0] === "minus"){
//         return a - b
//     }
//     return a + b; 
// }
function calculator() {
   if (!process.argv[2]) {
      return "No operation provided...";
}      if (!process.argv[3]){
      return "No numbers provided...";
     } if (process.argv[2] === "plus") {
      let newArg = process.argv.slice(3);
      let sum = 0;
      sum = newArg.reduce((accumulator, value) => {
     return accumulator + +value}, 0);
     return sum;
  }  if( process.argv[2] === 'minus'){
    let newArg = process.argv.slice(3); 
    let result = newArg[0]
    for(let i = 1; i < newArg.length; i++){
    result -= Number(newArg[i])
}
    return result
  } if (process.argv[2] !== "plus" || process.argv[2] !== "minus") {
            return "Invalid operation: modulo"
} 
}
// const commandPlus = "plus";
// const commandMinus = "minus";
// const numbers = ["5", "10"];
// process.argv.push(command, ...numbers);
// Don't change anything below this line.
module.exports = calculator;
