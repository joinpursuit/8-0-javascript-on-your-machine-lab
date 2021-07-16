/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const valid = ['plus','minus']
    const userInput = process.argv.slice(2,)

    if(userInput == false){
        return "No operation provided..."
        } else if(!valid.includes(userInput[0])){
            return `Invalid operation: ${userInput[0]}`
        } else if(valid.includes(userInput[0]) && userInput.length == 1){
            return "No numbers provided..."
        } else {
            let numArrayString = userInput.slice(1,)
            let numArray = numArrayString.map(i=>{
                return Number(i)})
            if(userInput[0] == 'plus'){
                let result = numArray.reduce((a,b)=>{
                    return a+b}) 
                return result
            } else if(userInput[0]=='minus'){
                let result = numArray.reduce((a,b)=>{
                    return a-b}) 
                return result
            }
            
        }
}
calculator()

// Don't change anything below this line.
module.exports = calculator;
