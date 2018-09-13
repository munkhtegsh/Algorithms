// --- Directions
// Given two arrays with integers, return a array with sorted integers
// --- Examples
// mergeSort([1,2,3,4,5], [2,4,5,7]) => [1,2,3,4,5,7]

/// mergeSort([10,3,5,7,2,4,4,9]) => [2,3,4,4 5,7, 9,10]

//divide it by two arr
//recursively call the mergeSort

function mergeSort(arr) {
  // iterate arr
  // var
  let medium = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, medium);
  let secondHalf = arr.slice(medium);
  return mergeSort(merge(firstHalf), merge(secondHalf));
}

// create merge fn 
// iterate first one

function merge(firstHalf, secondHalf) {
  
}

