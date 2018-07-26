// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(num) {
//     let midpoint = Math.floor((num * 2 - 1) / 2)
//     for (let row = 0; row < num; row++) {
//       let str = '';
//       for (let column = 0; column < num * 2 - 1; column++) {
//         if (column <= midpoint + row && column >= midpoint - row) {
//           str += '#';
//         } else {
//           str += ' ';
    
//         }
//       }
//       console.log(str)
//     }
//   }

// recursive solution

function pyramid(num, row = 0, str = '') {
    if (row === num) {
      return;
    }
  
    if (str.length === num * 2 - 1) {
      console.log(str)
      return pyramid(num, row + 1);
    }
  
    let midpoint = Math.floor((num * 2 - 1) / 2);
    let add;
    if (str.length >= midpoint - row && str.length <= midpoint + row) {
      add = '#';
    } else {
      add = ' ';
    }
  
    pyramid(num, row, str + add);
  }

module.exports = pyramid;
