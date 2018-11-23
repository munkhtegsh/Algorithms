// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//     // input: str
//     // output: boolean
//     // assamt: should be same when you read it from both side

//     let reversed = str.split('').reverse().join('');
//     return reversed === str;
// }

// Solution 2
// function palindrome(str) {
//     let reversed = str.split('').reduce((reversed, char) => char + reversed, '');
//     return reversed === str;
// }

// Solution 3 - not a best solution because calculating more than first half of the arr
// function palindrome(str) {
//     return str.split('').every((char, i, arr) => {
//         if (char === arr[arr.length - 1 - i]) {
//         return true;
//         }
//     })
// }

// Solution 4 - Recursive
function palindrome(str) {
  // 1. When str is empty or has only one char return true
  // 2. If first and last char are different return false
  // 3. Remove first and last char and call function

  if (str.length === 0 || str.length === 1) {
    return true;
  } else {
    if (str[0] !== str[str.length - 1]) {
      return false;
    } else {
      let subString = str.slice(1, str.length - 1);
      return palindrome(subString);
    }
  }
}

module.exports = palindrome;
