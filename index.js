/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    const argument = process.argv.slice(2)
    console.log(argument)
    const numb = process.argv.slice(3)
    console.log(numb)
    let result = Number(numb[0])
    if(typeof argument[0] !== "string"){
        return "No operation provided..."
    } if(numb[0] === undefined){
        return "No numbers provided..."
    } if(argument[0] !== "plus" && argument[0] !== "minus"){         
        return `Invalid operation: ${argument[0]}` }
      for (let i = 1; i < numb.length; i++){
          if(argument[0] === "plus"){                                   //works
            result += Number(numb[i]);
        } if(argument[0] === "minus"){
            result -= Number(numb[i]);
        }
      }
    return result
}



    /*   let arguement = process.argv.slice(2)
    let numb = process.argv.slice(3)
    let result = 0
    for (let i = 0; i < arguement.length; i++){
        if (typeof arguement[0] !== "string"){
            return "No operation provided..."
        } if (arguement[0] !== "plus" && arguement[0] !== "minus"){
            return `Invalid operation ${arguement[0]}`
        } if (arguement.length === 1 && typeof arguement[0] !== "string"){
            return "No numbers provided..."            
        } if (arguement[0] === "plus"){
            for(j = 0; j < numb.length; j++){
                result += numb[j]
            }
        } if (arguement[0] === "minus"){
            for(n = 0; n < numb.length; n++){
                result -= numb[n]            
            }
        }
        return result
    }
    //return result
//}*/

// Don't change anything below this line.
module.exports = calculator;
