/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    let total=0
    let ops=['minus','plus']
   
    if(process.argv.length === 2  && !ops.includes(operation)) {
        return "No operation provided..."
    }else if(numbers.length === 0) {
        return "No numbers provided..."
     }
    else{
       
         if(operation==='plus'){
             for(let i=0;i<numbers.length;i++){
                 total+=Number(numbers[i])
              }
         }else if(operation==='minus'){
               total=numbers[0]
               for(let i=1;i<numbers.length;i++){ 
               total=total-Number(numbers[i])
                
               }
    
         }else{ 
             return `Invalid operation: ${operation}`
            }
    }    
  
   return total
}

const operation=process.argv[2]
const argsList=process.argv
const numbers=argsList.slice(3)

let result=calculator(process.argv[2],numbers);
console.log(result)

// Don't change anything below this line.
module.exports = calculator;


