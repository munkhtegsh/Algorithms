// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
function anagrams(stringA, stringB) {
    // str, str
    // boolean
    // assumpt: count letters in each word and compare

    let word1 = stringA.split('');
    let word2 = stringB.split('');
    let countFirst = word1.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1
        } else {
            acc[curr] = 1;
        }
        return acc
    }, {});

    let countSecond = word2.reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1
      }
      return acc;
    }, {})

    for (let el in countFirst) {
      if (countFirst[el] !== countSecond[el]) {
        return false
      }
    }
    return true;
}



module.exports = anagrams;
