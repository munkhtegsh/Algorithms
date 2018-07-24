// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
// function steps(num) {
//     for (var row = 0; row < num; row++) {
//       let str = '';
//       for (var column = 0; column < num; column++) {
//         if (row >= column) {
//           str += '#'
//         } else {
//           str += ' '
//         }
//       }      
//       console.log(str)
//     }
//   }

// Recusrive solution
function steps(num, row = 0, str = '') {
    if (num === row) {
      return;
    }
  
    if (str.length === num) {
      console.log(str);
      return steps(num, row + 1);
    }
  
    if (str.length <= row) {
      str += '#';
    } else {
      str += ' ';
    }
  
    steps(num, row, str);
  }

module.exports = steps;
