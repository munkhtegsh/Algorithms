// --- Directions
// Given two arrays with integers, return a array with sorted integers
// --- Examples
// mergeSort([1,2,3,4,5], [2,4,5,7]) => [1,2,3,4,5,7]

function mergeSort(arr1, arr2) {
  // create new []
  // need iterator for each arrays
  // keep looping if idx is less than the arr 
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArr.push(arr1[i])
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  
  return newArr;
}

mergeSort([1,2,3,4,5], [2,4,5,7]);
