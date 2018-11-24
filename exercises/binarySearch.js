// Find the index of integer n in the arr

// Binary solution
function binary(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  while(true) {
    let mid = Math.floor((left + right) / 2);

    if (left > right) {
      return 'None'
    }

    if (arr[mid] < n) {
      left = mid + 1;
    } else if (arr[mid] > n) {
      right = mid - 1
    } else {
      return mid
    }
  }
}

binary([1,2,3,4,5,6], 9)
