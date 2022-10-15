/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
 

function calculator() {
  

    if (!process.argv[2]) {
      return "No operation provided...";
     
    } 
  
    if (!process.argv[3]){
      return "No numbers provided...";
     } 
    
     if (process.argv[2] === "plus") {
      let newArg = process.argv.slice(3);
      let sum = 0;
      sum = newArg.reduce((accumulator, value) => {
     return accumulator + +value}, 0);
     return sum;
  
     }
  
  
    if( process.argv[2] === 'minus'){
    let newArg = process.argv.slice(3); 
    let result = newArg[0]
    for(let i = 1; i < newArg.length; i++){
    
     result -= Number(newArg[i])

    }
    return result
  
          }
          
          if (process.argv[2] !== "plus" || process.argv[2] !== "minus") {
            return "Invalid operation: modulo"
          } 
        
        }

  // if (!process.argv[2]) {
  //   return "No operation provided...";
   
  // } 

  // if (!process.argv[3]){
  //   return "No numbers provided...";
  //  } 
  
  //  if (process.argv[2] === "plus") {
  //   let newArg = process.argv.slice(3);
  //   let sum = 0;
  //   sum = newArg.reduce((accumulator, value) => {
  //  return accumulator + +value}, 0);
  //  return sum;
  //   // return +process.argv[3] + +process.argv[4];  
  //  }
  // //  if (process.argv[2] !== "plus" || process.argv[2] !== "minus") {
  // //   return "Invalid operation: modulo"
  // // } 
  //   // for (let i = 0; i < process.argv.length; i++) {

  // if (process.argv[2] === "minus") {
  //   //  newArg = process.argv.slice(3);
  //   // // if (newArg[i] < 0){

  //   return +process.argv[3] - +process.argv[4]
  // // }else {
   
  // //    let newArg = process.argv.slice(3);
  // //    let result = 0
  // //       result = newArg.reduce((accumulator, value) => {
  // //   return accumulator - value}, 0);
  // //    result = newArg.map()
  // //    console.log(result)
  // //      return result;
  //       }
        
  //       if (process.argv[2] !== "plus" || process.argv[2] !== "minus") {
  //         return "Invalid operation: modulo"
  //       } 
  //     }
  // }else {
  //   return +process.argv[3] - +process.argv[4]
  // }
    // let newArg = process.argv.slice(3);
    //  result = newArg.reduce((a, b) => a - b)
    //  result += newArg[i]
    // result = newArg.reduce((accumulator, value) => {
    //   return accumulator - -value},0);
      // return result;
    // return +process.argv[3] - +process.argv[4]
      
//  if (process.argv.indexOf(2) !== "plus" || process.argv.indexOf(2) !== "minus") {
//   return "Invalid operation: modulo"
 
// }
 


//  let newArg = process.argv.slice(3);
  

//     newArg = newArg.map(str => {
//   return Number(str);
// });
  
//      console.log(newArg)
//       let sum = 0;
//    sum = newArg.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0)

      // return sum;

// return result
// }   
 

 
 

// return result



// Don't change anything below this line.
module.exports = calculator;

