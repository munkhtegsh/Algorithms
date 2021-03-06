// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// function vowels(str) {
//     let check = 'aeiou';
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//       if (check.includes(letter)) {
//         count++;
//       }
//     }
//     return count;
// }

// Solution 2 with regex
function vowels(str) {
    let matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
  }
  

module.exports = vowels;
