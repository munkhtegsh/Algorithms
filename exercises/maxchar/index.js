// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // input: str
    // output: str
    // assumpt: need to find the max letter in the str
    let arr = str.split('');
    let obj = {};
    for (let char of arr) {
        obj[char] = obj[char] + 1 || 1
    }
    
    let max = 0
    let maxChar = '';
    for (let char in obj) {
        console.log(char)
        if (obj[char] > max) {
        maxChar = char;
        max = obj[char]
        }
    }
    return maxChar 
}

module.exports = maxChar;
