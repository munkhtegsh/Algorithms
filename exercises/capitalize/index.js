// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // make str to arr
    // split it
    // make new arr
    // loop through an arr
        // push it to the new arr when make the first char to Capital
    // return
    let words = str.split(' ');
    let newArr = [];
    for (word of words) { 
        if (word.length === 0) {
            newArr.push(word); 
        } else {
            newArr.push(word[0].toUpperCase() + word.slice(1)); }
        }
    return newArr.join(' ');
}

module.exports = capitalize;
