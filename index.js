/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let arr = process.argv.slice(2);
    let sum = Number(arr[1]);

    if (arr.length === 0) {
        return "No operation provided...";
    } else if (arr[0] !== 'minus' && arr[0] !== 'plus') {
        return "Invaild operation: ${arr[0]}";
    } else if (arr[1] === undefined) {
        return ("No numbers provided...");
    }
    
    if (arr[0] === 'plus') {
        for (let i = 1; i < arr.length - 1; i++) {
            sum += Number(arr[i + 1]);
        }
    } else if (arr[0] === 'minus') {
        for (let i = 1; i < arr.length - 1; i++) {
            sum -= Number(arr[i + 1]);
        }
    }

    return sum;

}

// Don't change anything below this line.
module.exports = calculator;
//console.log(process.argv);//array of the command line
const command = "plus";
const numbers = [5, 10];
process.argv.push(command, ...numbers);

//Notes to help understand ---V

//if statements on Line 19 & 23 only seem to pass w/ arr[0] === 'plus'\'minus'. When arr.length === 0 placed there then it doesn't work due to uncertainity with operator placement/which operrator used
//arr.length === 0 is the same as arr[0] === undefined=>length is 0, hints the [0]
//console.log(sum)->not a number but console.log(arr)->will result of a number when value added to or subtracted from
//node run.js;can add values to the end to figure out everything;it's calling the calculater function
//use [1 for let sum = Number(arr[]) because 0 will give a NaN b/c there's no number there in the sequence]
//Number method causes the string be turned into numbers=>a built in javascript function
//process.argv=> information is coming from the command line due to no parameters-in a local code,usually it expresses if the paramaters are there or not which determines if its from the command line or not