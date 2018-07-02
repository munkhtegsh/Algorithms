// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//solution 1
// function fizzBuzz(n) {
//     // input: int
//     // output: numbers depends on divide by 3, 5 and both
//     // assumpt: need to check that num is divided by 3, 5
//     let i = 1;
//     while (i <= n) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }
//         i++;
//     }
// }

//solution 2
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
      var str = '';
      if (i % 3 === 0) {
        str += 'fizz'
      } 
      
      if (i % 5 === 0) {
        str += 'buzz'
      } 
  
      console.log(str || i)
    }
  }


module.exports = fizzBuzz;
