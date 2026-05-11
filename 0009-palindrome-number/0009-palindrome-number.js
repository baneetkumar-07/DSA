/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let rvStr = str.split('').reverse().join('');
    return str === rvStr
};