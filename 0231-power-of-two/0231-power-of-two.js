/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // using bitwise operator
    return n > 0 && (n & (n-1)) === 0;
    
};