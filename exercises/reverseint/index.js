// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


function reverseInt(n) {
    // input: int 
    // output: reversed int 
    // assumpt: convert to str to arr and reverse it 
    // check if it has - need to start it from the index 1
    if (n < 0) {
      let reversedInt = n.toString().split('').reverse()
      reversedInt.splice(reversedInt.length - 1, 1)    
  
      return -(+reversedInt.join(''))
    }
  
    return +n.toString().split('').reverse().join('');
  
  
  }
  
  reverseInt(-500)
module.exports = reverseInt;
