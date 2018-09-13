
function mergeSort(arr) {
  // iterate arr
  // var
  if (arr.length === 1) {
    return arr
  }
  let medium = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, medium);
  let secondHalf = arr.slice(medium);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// create merge fn 
// iterate first one

function merge(firstHalf, secondHalf) {
  let j = 0;
  let i = 0;
  let container = [];
  while(i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      container.push(firstHalf[i])
      i++;
    } else {
      container.push(secondHalf[j])
      j++;
    }
  }

  return container.concat(firstHalf.slice(i), secondHalf.slice(j));
; 
}

mergeSort([10,3,5,7,2,4,4,9])