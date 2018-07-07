// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// function chunk(array, size) {
    // assumpt: get the last element of newArr
      // if a last element size eq to size or last element is falsy then add [it] to newArr
      // else push element to last element
//     let newArr = [];
//     for (var el of array) {
//       let lastEl = newArr[newArr.length - 1];
//       if (!lastEl || lastEl.length === size) {
//         newArr.push([el]);
//       } else {
//         lastEl.push(el)
//       }
//     }
//     return newArr;
//   }
  
// // Solution 2
// function chunk(array, size) {
//     let chunked = [];
//     let idx = 0;
//     while (idx < array.length) {
//         chunked.push(array.slice(idx, idx + size));
//         idx += size;
//     }
//     return chunked;
// }

// Solution 3
function chunk(array, size, result= []) {
    if (array.length <= size) {
      result = [...result, array];
      return result;
    } else {
      result = [...result, array.slice(0, size)];
      return chunk(array.slice(size, array.length), size, result)
    }
  }


module.exports = chunk;
