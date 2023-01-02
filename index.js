/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const calc = process.argv[2];
    console.log(calc);

    const num = process.argv.slice(3);
    console.log(num)

    let calcSum = Number(num[0]);

        if(calc === undefined) {
            return "No operation provided..."
        }
        if(calc !== 'plus' && calc !== 'minus') {
            return `Invalid operation: ${calc}`
        }
        if(num.length === 0) {
            return "No numbers provided..."
        }

        if(calc === 'plus') {
            for(let i = 1; i < num.length; i++) {
                calcSum += Number(num[i])
            }
        }

        if(calc === 'minus') {
            for(let i = 1; i < num.length; i++) {
                calcSum -= Number(num[i])
            }
        };

        return calcSum
}

/*
$ node process-args.js one two=three four
Would generate the output:

0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
*/

// Don't change anything below this line.
module.exports = calculator;
