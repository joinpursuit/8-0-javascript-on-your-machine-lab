/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operation = process.argv[2];
    const nums = process.argv.slice(3);
    const array =  process.argv.slice(2);
    if (operation === "plus") {
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            result = Number(nums[i]) + result 
        }
        return result 
        } 
    if (operation === "minus") {
        let result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            result -= (Number(nums[i]))
        }
        return result 
        }
    if (array.length === 0){
        let result =  "No operation provided...";
        return result
        }
        if (nums.length === 0){
        let result =  "No numbers provided...";
        return result
        }
    if (operation !== "plus" || "minus" ) {
        let result = `Invalid operation: ${operation}`;
        return result
        }
}

// Don't change anything below this line.
module.exports = calculator;
