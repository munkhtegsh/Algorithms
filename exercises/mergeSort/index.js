// --- Directions
// Given two arrays with integers, return a array with sorted integers
// --- Examples
// mergeSort([1,2,3,4,5], [2,4,5,7]) => [1,2,3,4,5,7]

// Solution: 1
// function mergeSort(arr1, arr2) {
//   // create new []
//   // need iterator for each arrays
//   // keep looping if idx is less than the arr 
//   let newArr = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length || j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       newArr.push(arr1[i])
//       i++;
//     } else {
//       newArr.push(arr2[j]);
//       j++;
//     }
//   }
  
//   return newArr;
// }

// Solution 2
function mergeSort(arr1, arr2) {
  // if either one of them empty arr then return other one
  // take the first item in the arrays
  // set the idx in each one of them
  // check each one of them are true then loop
    // check the 
  
  if (arr1.length === 0) {
    return arr2;
  }
  
  if (arr2.length === 0) {
    return arr1;
  }
  
  let aElm = arr1[0];
  let bElm = arr2[0];
  let i = 1;
  let j = 1;
  let mergedArr = [];
  
  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      mergedArr.push(aElm);
      aElm = arr1[i++];
    } else {
      mergedArr.push(bElm);
      bElm = arr2[j++];
    }
  }
  
  return mergedArr;
}



mergeSort([1,2,3,4,5], [2,4,5,7]);
