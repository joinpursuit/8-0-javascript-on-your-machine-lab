/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {

    let inputArr = process.argv;
    let operation = inputArr[2];
    let numbers = inputArr.slice(3);
    let newNum = 0;


    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let num = Number(number);

        if (!operation) { 
            newNum = "no operation provided...";
        if (operation === "plus") {
            newNum += num;
        } else if (operation === "minus") {
            if (i === 0) {
                newNum += num;
            } else {
                newNum -= num;
            }
        }

       if (!operation) { 
            newNum = "no operation provided...";
        } else if (!numbers) {
            newNum = "No numbers provided...";
        }
        


    }
    return newNum;
}




// Don't change anything below this line.
module.exports = calculator;
