// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // assumpt: get the last element of newArr
      // if a last element size eq to size or last element is falsy then add [it] to newArr
      // else push element to last element
    let newArr = [];
    for (var el of array) {
      let lastEl = newArr[newArr.length - 1];
      if (!lastEl || lastEl.length === size) {
        newArr.push([el]);
      } else {
        lastEl.push(el)
      }
    }
    return newArr;
  }
  


module.exports = chunk;
