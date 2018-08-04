// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution: 
// function fib(n) {
//     // create arr
//     // loop n
//       // need to add the first and next
//       // push it to arr

//   let sum = 0; 
//   let container = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = container[i - 1];
//     const b = container[i - 2];
//     container.push(a + b)
//   }
//   return container[n];
// }

// Recursive solution:
// function fib(n) {
//     if (n < 2){
//       return n
//     }
//     return fib(n - 1) + fib(n - 2)
//   }


// Using memoize: 
function memoize(fn) {
    const cache = {};
    return function(...args) {
      if (cache[args]) {
        return cache[args];
      }
  
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  }
  
  function slowFib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2)
  }
  
  fib = memoize(slowFib)
  fib(50)



module.exports = fib;
