/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
   
   let input = process.argv;
   const convertNum = input.slice(3);
   const newNum = convertNum.map((i) => Number(i));


   if (!input[2]) {
       return "No operation provided...";

   }

   if (input[2] !== 'plus' && input[2] !== 'minus') {
       return `Invalid operation: ${input[2]}`;
   } else {
       for (const i of newNum)

       if (input[2] === 'plus') {
           const addUp = (accumlator, i) => accumlator + i;

           return newNum.reduce(addUp)
        } else if (input[2] === 'minus') {
            const subtract = (accumlator, i) => accumlator - i;

            return newNum.reduce(subtract)
        }
   }

 return "No numbers provided...";

}







// Don't change anything below this line.
module.exports = calculator;
