// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // input: str
    // output: reversed str
    // assumpt: use reverse method

    // return str.split('').reverse().join('');
    let reversed = '';
    for (let i in str) {
        reversed = i + reversed 
    }
    return reversed;
    
}

module.exports = reverse;
