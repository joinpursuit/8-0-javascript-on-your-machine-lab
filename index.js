/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let array = process.argv.slice(2);
  let operatorArr = array.shift();

  if (!operatorArr) {
    return "No operation provided...";
  } else if (!array.length) {
    return "No numbers provided...";
  }

  let total = Number(array[0]);

  if (operatorArr.toLowerCase() === "plus") {
    for (let i = 1; i < array.length; i++) {
      total += Number(array[i]);
    }
    return total;
  } else if (operatorArr.toLowerCase() === "minus") {
    for (let i = 1; i < array.length; i++) {
      total -= Number(array[i]);
    }
    return total;
  } else if (
    operatorArr.toLowerCase() !== "plus" ||
    operatorArr.toLowerCase() !== "minus"
  ) {
    return `Invalid operation: ${operatorArr}`;
  }
}

calculator();
//Complete the `calculator()` function in the `index.js` file. This function will have no parameters -- instead, make use of `process.argv` to take in arguments from the command line. Use the tests, the JSDoc syntax, and the examples below to learn more about how the function should work.

// Don't change anything below this line.
module.exports = calculator;

//   for (let i = 0; i < array.length; i++) {
//     if (array[0] === "plus".toLowerCase()) {
//       let newArr = array.slice(1);
//       total = math.sum(newArr);
//       console.log(total);
//     } else if (array[0] === "minus".toLowerCase()) {
//       total;
//     } else if (array[1] !== Number) {
//       total;
//     } else {
//       console.log(`Invalid operation: ${array[0]}`);
//     }
//     console.log(total);
//   }
// }
