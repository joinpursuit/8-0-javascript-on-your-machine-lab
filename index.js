/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let operation = process.argv[2]
    //this is looking for the operation in itself plus or minus depending on what you're doing. 
    let numbers = process.argv.slice(3)
    //this is making a shallow copy of the numbers after the third index. Used slice 3 because it can add in more numbers no matter how long it is. 
    let total = 0
    // this is keeping the sum at 0 unless otherwise stated (accumulator)
    const add = (a, b) => a + b
    //this is to account for addition. Storing callback function for reduce.  
    const minus = (a, b) => a - b
    //this is making it understand its subtracting. Storing callback function for reduce.
    let input = numbers.map(Number)
    //for every "number" its going to make it a Number
    
    if(!operation){
        return "No operation provided..."
    }else if (!numbers.length){
        //this is checking if the numbers array is empty. 
        return "No numbers provided..."
    }else if (operation === "plus"){
        total += input.reduce(add) 
        //reduce literally reduces depending on what you give it. So if it's a long array it will keep adding until the end of the array. 
        // instead of writing the callback function it was set as a variable. input.reduce((a,b)=> a+b) "Easiest way to use reduce"
        return total
    }else if (operation === "minus"){
        total += input.reduce(minus) 
        return total
    }else{
        return `Invalid operation: ${operation}`
    }
    console.log(input)
   
 
}

// Don't change anything below this line.
module.exports = calculator;
