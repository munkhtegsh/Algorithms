// Write a recursive function power(x, n) that returns the value of xn (assume that n is an integer).

// Solution 1, Recursive
function power(x, n) {
  // The base case is when n = 0, and x0 = 1.
  if (n === 0) {
    return 1;
  }

  /*
  If n is positive and even, recursively compute y = xn/2, and then xn = y ⋅ y.
  Notice that you can get away with making just one recursive call in this case,
  computing xn/2 just once, and then you multiply the result of this recursive call
  by itself.
  */

  if (n % 2 === 0) {
    let y = power(x, n/2);
    return y * y;
  }

  /*
  If n is positive and odd, recursively compute xn-1, so that the
  exponent either is 0 or is positive and even. Then, xn = xn-1 ⋅ x
  */
  if (n % 2 === 1) {
    let y = power(x, n - 1);
    return x * y;
  }

  // If n is negative, recursively compute x-n, so that the exponent becomes positive. Then, xn = 1/x-n.
  return 1/x * power(x, n + 1)
}
